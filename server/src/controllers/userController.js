const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // console.log(req.body);
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const userId = await UserModel.create(username, email, hashedPassword);

        console.log(userId);

        const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({ success: true, userId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findByEmail(email);

        if (!user) {
            res.status(401).json({ error: 'Invalid email or password'});
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h'});
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};