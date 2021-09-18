const db=require('../models/index'),
showPage=(req, res)=>  {
    db.Products.findById(req.params.id)
        .then(function (selectedProduct) {
            res.render("show.ejs", { sp: selectedProduct })
        }).catch(function (err) {
            res.status(401).json({
                msg: "product Not Found"
            });
        })
}

module.exports=showPage