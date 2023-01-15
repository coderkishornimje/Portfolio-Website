import { useState } from "react";

function Contact() {


 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [message,setMessage]=useState("");

const collectData=async()=>{

if(email==='' || name==='' || message==='')
{
 alert(`Please Fill Input Properly
    Name 
    Email 
    Messsage `
    );  
}
else{

 let result= await fetch('http://localhost:5000/user',{

     method:'POST',
     body:JSON.stringify({name,email,message}),
     headers:{
      'Content-Type':'application/json'
     },
 });

 result=await result.json();
 alert("data save succefully");
 console.log(result);
 }
}

  return (
    <div id='Contact' className='contact-container'>
      
    <div className='contact-part1'>
    <img src='contact.jpg' alt='contace-page' id='contact-pic'/>
    </div>
 
   <div className='contact-part2' data-aos='flip-right'>

      <input type="text" placeholder="Enter Name Here" id='name' value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off"/>
      <input type="email" placeholder="Enter email Here" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
      <textarea type='text' placeholder="Enter Message Here" rows='8' id='message' value={message} onChange={(e)=>setMessage(e.target.value)}/>

      <input type='submit' id='submit-btn' className='sub-btn' onClick={collectData} />
         
   </div>
  
    </div>
  )

}

export default Contact