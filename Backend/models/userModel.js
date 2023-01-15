import mongoose, { model } from "mongoose";

const userChema=mongoose.Schema({

name:{
  type:String,
  required:true
},

email:{
  type:String,
  required:true,
  unique:true
},

message:{
  type:String
}

});

const user=mongoose.model('user',userChema);

export default user;