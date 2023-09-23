const ReactionModel = require('../models/reactionModel');

exports.createReaction = async (req, res) => {
    try {
        const { userId, thoughtId } = req.body;
        const reactionId = await ReactionModel.create(userId, thoughtId);  
        res.status(201).json({ reactionId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReactionsByThoughtId = async (req, res) => {
    try {
        const { thoughtId } = req.params;
        const reactions = await ReactionModel.findByThoughtId(thoughtId);
        res.status(200).json({ reactions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteReaction = async (req, res) => {
    try {
        const { reactionId } = req.params;
        await ReactionModel.delete(reactionId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};