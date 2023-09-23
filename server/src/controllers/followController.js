const FollowModel = require('../models/followModel');

exports.createFollow = async (req, res) => {
    try {
        const { followerId, followeeId } = req.body;
        const followId = await FollowModel.create(followerId, followeeId);
        res.status(201).json({ followId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFollowsByFollowerId = async (req, res) => {
    try {
        const { followerId } = req.params;
        const follows = await FollowModel.findByFollowerId(followerId);
        res.status(200).json({ follows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFollow = async (req, res) => {
    try {
        const { followId } = req.params;
        await FollowModel.delete(followId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

