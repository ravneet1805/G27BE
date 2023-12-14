const express=require("express");
const { model } = require("mongoose");
const router = express.Router();


const {authrouter}= require('./auth')
const {noterouter}= require('./note')



router.use(authrouter)
router.use(noterouter)


module.exports={router}