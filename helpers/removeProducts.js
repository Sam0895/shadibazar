const db=require('../models/index'),
removeProducts= (req, res)=> {
    db.Products.remove({})
        .then(function (products) {
            res.json(products);
        }).catch(function (err) {
            res.json(err);
        })
}

module.exports=removeProducts;