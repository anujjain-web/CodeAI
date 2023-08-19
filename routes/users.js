const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

console.log("hello there");
router.get('/profile', userController.Profile);
router.get('/signUp' , userController.signUp);
router.get('/signIn', userController.signIn);

router.post('/create',userController.create);

module.exports = router;