// package for full page Scrolling 
//npm install --save @ap.cx/react-fullpage
// npm i --save aos  // for animation a page or block
// npm i react-router-hash-link   // for smooth scrolling of website webapges

import React from 'react'
import Skills from './pages/Skills';
import About from './pages/About';
import Education from './pages/Education';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Typewriter from "typewriter-effect";
import PopUp from '../components/Popup';

class Home extends React.Component {

  render(){
  return (
    <div className='body-container'>
    <div className='Home-Container' id='Home'>
     <div className='Home-Info'>
      <h1>Hi There,</h1>
      <h1>I'm Kishor <strong style={{color: 'rgb(255, 124, 43)'}}>Nimje</strong></h1>
    <div className='HomeMid-content'>
      <h3 id="text">I Am Into </h3>
   <Typewriter 
  options={{
    strings: ['Web Develop', 'FrontEnd Develop','Full Stack Develop'],
    autoStart: true,
    loop: true,
  }} />
  
  </div>
      <br/>

      <button id='About-btn'><h4>About Me :)</h4></button>
      <br/><br/><br/>
      <a href="#" class="fa fa-facebook social-app" target='_blank'></a>
     <a href="#" class="fa fa-twitter social-app" target='_blank'></a>
     <a href="https://www.linkedin.com/in/kishor-nimje-1902bb1bb/" class="fa fa-linkedin social-app" target='_blank'></a>
     <a href="#" class="fa fa-instagram social-app" target='_blank'></a>
     <a href="#" class="fa fa-google social-app" target='_blank'></a>
     </div> 


     <div className='Home-Profile'>
        <img src='img1.webp' alt="profiles" id='user-profile'/>
     </div>
    </div>
      
    <Education/>
    <Skills />
    <Work/>
    <Experience/>
    <About/>
    <Contact/>
    </div>
  )
}
}

export default Home