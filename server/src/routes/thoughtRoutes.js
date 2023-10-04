const express = require('express');
const thoughtController = require('../controllers/thoughtController');
const router = express.Router();

router.post('/create', thoughtController.createThought);
router.get('/getAll', thoughtController.getAllThoughts);
router.get('/:userId', thoughtController.getThoughtsByUserId);
router.delete('/:thoughtId', thoughtController.deleteThought);

module.exports = router;