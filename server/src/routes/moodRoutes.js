const express = require('express');
const moodController = require('../controllers/moodController');
const router = express.Router();

router.post('/', moodController.createMood);
router.get('/:userId', moodController.getMoodsByUserId);
router.delete('/:moodId', moodController.deleteMood);

module.exports = router;