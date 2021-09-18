const mongoose=require('mongoose');
   mongoose.connect('mongodb+srv://ShivamShukla:ShivamShukla@cluster0.ls5ap.mongodb.net/ShadiBazar?retryWrites=true&w=majority');
   mongoose.Promise=Promise;
   mongoose.set('debug',true);

   module.exports.Products=require('./product');
   module.exports.Users=require('./user'); 