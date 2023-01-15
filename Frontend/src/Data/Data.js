import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Avtar from './Avtar';
import './data.css';

function Data() {
 
const [users,setUsers]=useState([]);

const fetchData=()=>{

fetch('http://localhost:5000/api')
.then((res)=>res.json())
.then((data)=>{

  setUsers(data);
})

}
console.log(users);

useEffect(()=>{
fetchData();
},[]);



  return (
    <>
      <h1 id='comm-heading'>Messages</h1>
      <div className='data-container scroll'>

    {/*😒😒😒  Dummy Data here  😒😒😒 */}

    <div className='child-contain'>
    <div className='namepic'>
    <Avtar/><h4 id='comm-name'>&nbsp;Milkah singh </h4>
    </div>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add more feature much bette 👍👍 </p>
    <button className='comm-btn'>Replay</button>
    </div>
    <div className='child-contain'>
    <div className='namepic'>
    <Avtar/><h4 id='comm-name'>&nbsp;Lokesh singh goal</h4>
    </div>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;feature much better </p>
    <button className='comm-btn'>Replay</button>
    </div>
    <div className='child-contain'>
    <div className='namepic'>
    <Avtar/><h4 id='comm-name'>&nbsp;Harbijit natur </h4>
    </div>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;not bad 😁😁😁 </p>
    <button className='comm-btn'>Replay</button>
    </div>
    <div className='child-contain'>
    <div className='namepic'>
    <Avtar/><h4 id='comm-name'>&nbsp;karan singh </h4>
    </div>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😍😍😍 </p>
    <button className='comm-btn'>Replay</button>
    </div>
    <div className='child-contain'>
    <div className='namepic'>
    <Avtar/><h4 id='comm-name'>&nbsp;Saniya R. Jaiswal </h4>
    </div>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👌👌👌👌 </p>
    <button className='comm-btn'>Replay</button>
    </div>
  {/* 😒😒 End f Dummy Data here😒😒😒  */}

      {
        users.map((item)=>{
          return(
          <div className='child-contain'>
            <div className='namepic'> 
            <Avtar/><h4 id='comm-name'>&nbsp;{item.name}</h4>
            </div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.message}</p>
            <button className='comm-btn'>Replay</button>
          </div>
        )})
      }
  </div>
    </>
  )
}

export default Data