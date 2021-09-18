const db=require('../models/index'),
products = require('../data/dummyProduct'),
removeProducts= (req, res)=> {
    db.Products.remove({})
        .then(function (products) {
            res.json(products);
        }).catch(function (err) {
            res.json(err);
        })
}

module.exports=removeProducts;