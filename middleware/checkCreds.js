const checkCreds = (req, res, next)=>{
    

    const {name,email,password,cpassword}=req.body
    if(name.length <3 || password!==cpassword || cpassword.length<4){
        return res.send("invalid")
    }
    next()

}

module.exports={checkCreds}