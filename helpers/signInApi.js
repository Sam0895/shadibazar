const db=require('../models/index'),
 jwt=require('jsonwebtoken'),
signInApi=(req, res)=> {
    // todo -> email filter 
    db.Users.findOne({email:req.body.email})
    .then(function(user){
           if(user){
              // todo -> password match -> bcrypt.compareSync():Boolean 
                 if(bcrypt.compareSync(req.body.password,user.password)){
                    res.json({
                        name:user.name,
                        email:user.email,
                        isAdmin:user.isAdmin,
                        _id:user._id,
                        token:jwt.sign({
                            name:user.name,
                            email:user.email,
                            isAdmin:user.isAdmin,
                            _id:user._id
                        },process.env.JWT_SECRET)
                      })
                 }else{
                    res.status(404).json({
                        errMsg:`Invalid email or password   `        
                     });
                 }
             // send the data of user 
           }else{
               res.status(404).json({
                  errMsg:`Invalid email or password   `        
               });
           }
    })
}

module.exports=signInApi