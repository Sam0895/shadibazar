
const ex = require('express'),
    port = process.env.PORT || 4445,
    jwt=require('jsonwebtoken'),
    verifyToken=require('./utils'),
    root=require('./helpers/root'),
    addProducts=require('./helpers/addProducts'),
    removeProducts=require('./helpers/removeProducts'),
    removeUsers=require('./helpers/removeUsers'),
    ourProducts=require('./helpers/ourProducts'),
    showPage=require('./helpers/showPage'),
    signIn=require('./helpers/signIn'),
    signInApi=require('./helpers/signInApi'),
    signUp=require('./helpers/signUp'),
    signUpApi=require('./helpers/signUpApi'),
    productIdApi=require('./helpers/productIdApi'),
    shipping=require('./helpers/shipping'),
    cart=require('./helpers/cart'),
    SliderImg=require('./data/sliderImages'),
    db = require('./models/index'),
    dotenv=require('dotenv');
    dotenv.config()
    app = ex();
    bcrypt = require('bcrypt'),
    app.use(ex.static("public"));      // static file use krne ke liye

app.use(ex.json());                //to parse the upcoming post request data       

app.get('/', ourProducts)
app.get('/addSlide',(req, res)=>  {
    db.SliderImg.insertMany(slideImg)
        .then(function (slideImg) {
            res.json(slideImg);
        }).catch(function (err) {
            res.json(err);
        })
})
app.get('/addproducts', addProducts)
app.get('/removeproducts',removeProducts)
app.get('/removeUsers',removeUsers)
app.get('/products',ourProducts)
app.get('/product/:id', showPage)
app.get('/feedback/:id',(req,res)=>res.render('Feedback.ejs'))
//-----------------------authentication ---------------
app.get('/signin',signIn)
app.post('/signin',signInApi);
app.get('/signup',signUp)
app.post('/signup',signUpApi)
app.get('/cart', cart)
app.get('/wishlist', (req,res)=>res.render('wishList.ejs'))
app.get('/api/product/:id', productIdApi)
app.get('/shipping/:token',verifyToken, shipping)
app.get('/orders/:token',verifyToken,(req,res)=>{
    res.render('orders.ejs')
})
app.get('/wishorders/:token',verifyToken,(req,res)=>{
    res.render('wishOrder.ejs')
})
app.get('/directOrders/:token',verifyToken,(req,res)=>{
    res.render('directOrder.ejs')
})
app.listen(port, () =>{
    console.log(`server is running at ${port}`);
})