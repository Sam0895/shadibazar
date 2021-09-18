const db=require('../models/index'),
removeUsers= (req, res)=> {
    db.Users.remove({})
        .then(function (user) {
            res.json(user);
        }).catch(function (err) {
            res.json(err);
        })
}

module.exports=removeUsers;