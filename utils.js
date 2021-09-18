const jwt=require('jsonwebtoken');
const verifyToken=function(req,res,next){
    const token =req.params.token;
    jwt.verify(token,process.env.JWT_SECRET,function(err,decode){
        if(err){
            res.json({errMsg:"Token is invalid"})
        }else{
            req.userInfo=decode;
            next();
        }
    })
};

module.exports=verifyToken;