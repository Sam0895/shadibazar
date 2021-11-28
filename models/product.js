
const mongoose=require('mongoose'),
   products=new mongoose.Schema({
     name:{
         type:String,
         required:true
     },
     img:{
         type:String,
         required:true,
         
     },
     price:{
         type:Number,
         required:true
     },
     des:{
         type:String,
         required:true
    },
     qtyInStock:{
         type:Number,
         required:true
    },
     

   

  });
  const Products=mongoose.model("Products",products);
  module.exports=Products;