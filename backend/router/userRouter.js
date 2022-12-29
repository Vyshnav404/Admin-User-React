const express = require('express');
const {usersignUp, userlogin} = require('../controller/loginController');
const { getUserDetails , getEditProfile } = require('../controller/userController')
const router = express.Router();

router.post('/',usersignUp);
router.post('/userlogin',userlogin)
router.get('/getUserDetails',getUserDetails)
router.get('/editProfilePic',getEditProfile)

module.exports = router;