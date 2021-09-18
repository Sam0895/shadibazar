const db=require('../models/index'),
products = require('../data/dummyProduct'),
addProducts=(req, res)=>  {
    db.Products.insertMany(products)
        .then(function (products) {
            res.json(products);
        }).catch(function (err) {
            res.json(err);
        })
}

module.exports=addProducts;