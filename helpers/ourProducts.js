const db=require('../models/index'),
ourProducts= (req, res)=>  {
    db.Products.find()
        .then(function (products) {
            res.render("product.ejs", { productsArray: products });
        }).catch(function (err) {
            res.json(err);
        })

}

module.exports=ourProducts;