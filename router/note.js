const express=require("express");
const noterouter = express.Router();

const {createnote, deletenote}= require('../function/note')

const {isLogin}= require('../middleware/isLogin')

noterouter.get('/createnote', isLogin,createnote)
noterouter.get('/deletenote',isLogin, deletenote)

module.exports={noterouter}