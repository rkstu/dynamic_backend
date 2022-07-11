const mongoose = require('mongoose');
const Detail = mongoose.Schema({
  brandName : String,
  brandIconeUrl:String,
  links:[
    {
      lable:String,
      url:String
    }
  ]
})


module.exports = mongoose.model("detail", Detail);