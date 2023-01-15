import user from "../models/userModel";
import asyncHandler from 'express-async-handler';


//it help us to get all users from   user

export  const getUser=asyncHandler(async(req,res)=>{

    const users=await user.find({});
    res.json(users);
  
    console.log(users);

})

export const getUserById=asyncHandler(async(req,res)=>{

const users =await user.findById(req.params.id);

if(users)
{
  
  res.json(users);
}
else{
  res.status(404).json({message:"user not found"});
  res.status(404);
  throw new Error("user not found");
}

})
