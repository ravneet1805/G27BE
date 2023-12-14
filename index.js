require('dotenv').config()
const express=require("express");

const {router} = require('./router/router')
const {connectToMongo} = require('./db')

const app = express();
app.use(express.json());

app.use(router)

const port = process.env.PORT
connectToMongo()
app.get('/hii',(req,res)=>{
    res.send("holaaa")
} )
app.listen(port,()=>{
    console.log("app started")
})
