const db=require('../models/index'),
// const slideImg=require('../data/sliderImages')

ourProducts= (req, res)=>  {
   
    db.Products.find()
     .then(function (products) {
            db.SliderImg.find()
            .then((slideImg)=>{
                res.render("product.ejs", { productsArray: products ,slideArray:slideImg});
                  })
        }).catch(function (err) {
            res.json(err);
        })

}

module.exports=ourProducts;