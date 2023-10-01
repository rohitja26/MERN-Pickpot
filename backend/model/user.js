const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
     name:{type:String,require:true},
     email:{type:String,require:true},
     pic:{type:String,require:true,default:"user.png"},
     password:{type:String,require:true,minlength:6},
     locationsid:[
          {type:mongoose.Types.ObjectId,required:true,Ref:"Location"}
     ],
});

module.exports = mongoose.model("User",userSchema);