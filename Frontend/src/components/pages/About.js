import React from 'react';

function About(){


  return(

    <div className='about-main' id='About'>

        <div className='about-profile-div'>
        <img id="about-img" src='aboutprofile.jpg' alt='profile' />
        </div>

      <div className='about-info' data-aos="fade-up">
          
          <h1>About Me</h1>
          <p>mkmmkfmdkgmkmfgs  mmgkl dsmfkmdfkm sdmkfmkdmf
          dmfmdslfmldsmfl; mdlmflm;dlsfml riojgimkm
          ds,ol,dsof kodkfoo kdomf,l4o kd,034mlfmg ,ld,mflsd
          mls;dmlmsdlf osdfmygojfgm ml;mfdlmf lmdslfmldsfm
          mdslfmdlsmf odsmfomwem dosmfofml mldsm,vl lmdslmfl
          mkmmkfmdkgmkmfgs  mmgkl dsmfkmdfkm sdmkfmkdmf
          </p><br/>
      <div className='myInfo-details'>
          
          <h4><label>Name: </label>kishor nimje</h4><br/>

          <h4><label>Email: </label>kishornimaje1234@gmail.com</h4><br/>
          
          <h4><label>Mob: </label>7410550126</h4><br/>
          
          <h4><label>Address: </label>08,Nagpur-Maharashtra</h4><br/>
      </div>
          <br/><br/>
          <button id='About-btn' data-aos="flip-right"><a id="github-link" href='https://github.com/coderkishornimje?tab=repositories' target='_blank'><h3>Connect With Me...</h3></a></button>
      </div>

    </div>
  )
}

export default About;