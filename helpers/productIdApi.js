const db=require('../models/index'),
productIdApi=(req, res)=>  {
    db.Products.findById(req.params.id)
        .then(function (selectedProduct) {
            res.json(selectedProduct)
        }).catch(function (err) {
            res.status(404).json({
                msg: "product Not Found"
            });
        })
}

module.exports=productIdApi;