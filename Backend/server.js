
import express  from "express";
import connectDB from './database/db';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import user from "./models/userModel";
import mongoose, { mongo } from "mongoose";

const port = 5000;
const app=express();


app.get("/",function(req,res){

  console.log(req);
res.send("Welcome to backend server");

});

//creating api for user


app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/users',async(req,res)=>{

  //post code here
  const viewer=new user({
    name:req.body.name,
    email: req.body.email,
    message: req.body.message
});

  const val= await viewer.save();
  res.json(val);

  console.log(val);

  users.push(viewer);

  res.send(" user response is added");

})


app.get('/api',(req,res)=>{
  
 //res.send({name:"kishor"});

  user.find().then((data)=>{
     res.status(201).json(data)
  })

})

user.find({},function(err,data){

if(err) console.log(err);

console.log(data);

})

//end of api part code

app.post('/user',(req,res)=>{

 const data=new user({

 //_id:new mongoose.Types.ObjectId(),
  name:req.body.name,
  email:req.body.email,
  message:req.body.message

 });

 data.save().then((result)=>{
  res.status(201).json(result);
 })
 .catch(err=>{
  console.log(err);
 })


})


const PORT =process.env.PORT || 5000;


connectDB();
dotenv.config();

app.listen(port,function(){

console.log(`server is running on  ${process.env.NODE_ENV} mode on PORT ${PORT} `);

});

