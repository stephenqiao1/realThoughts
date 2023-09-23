const express = require('express');
const followController = require('../controllers/followController');
const router = express.Router();

router.post('/', followController.createFollow);
router.get('/:followerId', followController.getFollowsByFollowerId);
router.delete('/:followId', followController.deleteFollow);

module.exports = router;