const express = require('express');
const reactionController = require('../controllers/reactionController');
const router = express.Router();

router.post('/', reactionController.createReaction);
router.get('/:thoughtId', reactionController.getReactionsByThoughtId);
router.delete('/:reactionId', reactionController.deleteReaction);

module.exports = router;
