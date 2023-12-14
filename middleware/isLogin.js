const isLogin=(req,res,next)=>{
    res.send("not loggedin")
    next();
}

module.exports={isLogin}