import React,{ } from 'react'
import '../index.css';
//import {Link} from 'react-router-dom';
//import {Link as LinkScroll} from 'react-scroll/modules';

import {HashLink as Link} from 'react-router-hash-link'; 

function Navbar() {

  
  return (
    // <div className='Navbar-Main sticky'>
    //   <div>
    //   <i className="fa fa-user user-logo" aria-hidden="true"><b> Kishor</b></i>
    //   </div>
    //     <ul className='Navbar-Menu' data-aos="top-bottom" id="myTopnav">
    //         <li><Link smooth to='#Home'><h5>Home</h5></Link></li>
    //         <li><Link smooth to='#About'><h5>About</h5></Link></li>
    //         <li><Link smooth to='#Skills'><h5>Skills</h5></Link></li>
    //         <li><Link smooth to='#Education'><h5>Education</h5></Link></li>
    //         <li><Link smooth to='#Work'><h5>Work</h5></Link></li>
    //         <li><Link smooth to='#Experience'><h5>Experience</h5></Link></li>
    //         <li><Link smooth to='#Contact'><h5>Contact</h5></Link></li>
    //         {/* <LinkScroll to="About" spy={true} smooth={true} offset={-100} duration={500} >About</LinkScroll> */}
    //     </ul>
    // </div>
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div className="nav-title">
      <i className="fa fa-user user-logo" aria-hidden="true">&nbsp;&nbsp;KISHOR</i>
      {/* <img id='name-img' src='name.png' alt='name-logo'/> */}
      </div>
    </div>
    
    <div className="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    {/* <div className="nav-links"> */}
  <div className='nav-links' >
      <Link smooth to='#Home'><h5>Home</h5></Link>
      <Link smooth to='#About'><h5>About</h5></Link>
      <Link smooth to='#Skills'><h5>Skills</h5></Link>
      <Link smooth to='#Education'><h5>Education</h5></Link>
      <Link smooth to='#Work'><h5>Work</h5></Link>
      <Link smooth to='#Experience' ><h5>Experience</h5></Link>
      <Link smooth to='#Contact'><h5>Contact</h5></Link>
    
    </div>
  </div>
  )
}

export default Navbar