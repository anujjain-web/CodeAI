const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts_controller');


router.post('/add', postController.addPost);
router.get('/add',postController.add);

module.exports = router;