const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.Home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
console.log('Router Loaded');

module.exports = router;