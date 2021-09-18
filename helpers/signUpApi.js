const db=require('../models/index'),
 jwt=require('jsonwebtoken'),
signUpApi= (req, res)=>{
    const hashPassword = bcrypt.hashSync(req.body.password, 12)
    db.Users.create({
        name: req.body.name,
        email: req.body.email,
        isAdmin: false,
        password: hashPassword
    })
        .then(function (user) {
            res.json({
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id,
                token:jwt.sign({
                    name:user.name,
                    email:user.email,
                    isAdmin:user.isAdmin,
                    _id:user._id
                },process.env.JWT_SECRET)
            })
        }).catch(function (err) {
            res.status(404).json({
                errMsg: "given email already found !"
            })
        })
}

module.exports=signUpApi