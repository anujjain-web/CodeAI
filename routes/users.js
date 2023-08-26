const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

console.log("hello there");
router.get('/profile', userController.Profile);
router.get('/sign-up' , userController.signUp);
router.get('/sign-in', userController.signIn);

router.post('/create',userController.create);

module.exports = router;