const ex = require('express'),
    port = process.env.PORT || 4445,
    jwt=require('jsonwebtoken'),
    verifyToken=require('./utils'),
    root=require('./helpers/root'),
    addProducts=require('./helpers/addProducts'),
    removeProducts=require('./helpers/removeProducts'),
    ourProducts=require('./helpers/ourProducts'),
    showPage=require('./helpers/showPage'),
    signIn=require('./helpers/signIn'),
    signInApi=require('./helpers/signInApi'),
    signUp=require('./helpers/signUp'),
    signUpApi=require('./helpers/signUpApi'),
    productIdApi=require('./helpers/productIdApi'),
    shipping=require('./helpers/shipping'),
    cart=require('./helpers/cart'),
    db = require('./models/index'),
    products = require('./data/dummyProduct'),
    dotenv=require('dotenv');
    dotenv.config()
    app = ex();
bcrypt = require('bcrypt'),
    app.use(ex.static("public"));      // static file use krne ke liye

app.use(ex.json());                //to parse the upcoming post request data       

app.get('/', root)
app.get('/addproducts', addProducts)
app.get('/removeproducts',removeProducts)
app.get('/products',ourProducts)
app.get('/product/:id', showPage)
//-----------------------authentication ---------------
app.get('/signin',signIn)
app.post('/signin',signInApi);
app.get('/signup',signUp)
app.post('/signup',signUpApi)

app.get('/cart', cart)

app.get('/api/product/:id', productIdApi)

app.get('/shipping/:token',verifyToken, shipping)

app.listen(port, () =>{
    console.log(`server is running at ${port}`);
})