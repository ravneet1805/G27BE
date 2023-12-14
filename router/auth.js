const express=require("express");
const authrouter = express.Router();

const {checkCreds}=require('../middleware/checkCreds')

const {login,logout, signup}= require('../function/auth')


authrouter.post('/login',login)
authrouter.get('/logout',logout)
authrouter.post('/signup',checkCreds,signup)

module.exports={authrouter}