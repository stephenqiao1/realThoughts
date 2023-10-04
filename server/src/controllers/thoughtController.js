const ThoughtModel = require('../models/thoughtModel');

exports.createThought = async (req, res) => {
    try {
        const { userId, content } = req.body;
        const thoughtId = await ThoughtModel.create(userId, content);
        res.status(201).json({ success: true, thoughtId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllThoughts = async (req, res) => {
    try {
        const thoughts = await ThoughtModel.findAll();
        res.status(200).json({ thoughts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getThoughtsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const thoughts = await ThoughtModel.findByUserId(userId);
        res.status(200).json({ thoughts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteThought = async (req, res) => {
    try {
        const { thoughtId } = req.params;
        await ThoughtModel.delete(thoughtId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};