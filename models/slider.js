
const mongoose=require('mongoose'),
slideImg=new mongoose.Schema({

  img:{
      type:String,
      required:true,
      
  }


});
const SliderImg=mongoose.model("SlideImg",slideImg);
module.exports=SliderImg;