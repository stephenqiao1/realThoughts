const MoodModel = require('../models/moodModel');

exports.createMood = async (req, res) => {
    try {
        const { userId, mood } = req.body;
        const moodId = await MoodModel.create(userId, mood);
        res.status(201).json({ moodId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMoodsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const moods = await MoodModel.findByUserId(userId);
        res.status(200).json({ moods });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMood = async (req, res) => {
    try {
        const { moodId } = req.params;
        await MoodModel.delete(moodId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}