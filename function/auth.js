const {User} = require('../models/User')

var bcrypt = require("bcrypt")

const login=async(req,res)=>{
    const {email,password}= req.body
    const user=await User.find({email})

    if(user.length>0){
        const data=user[0];
        const isMatched = await bcrypt.compare(password, data.password);

        if(isMatched)
        return res.send({status:true,user})
        else
        return res.send({status:false, message:"invalid creds"})
    }else{
        return res.send({status:false, message:"invalid creds"})
    }

    
}


const logout=(req,res)=>{
    res.send("logout")
}

const signup= async(req,res)=>{
    var salt = await bcrypt.genSalt(10);
    console.log("printing req.body");

    
    const { name, email, password } = req.body;

    var hashpassword = await bcrypt.hash(password, salt);
    

    const user =  await User({name,email,password:hashpassword})


    user.save()

    res.send("create account")
}

module.exports={login,logout,signup}