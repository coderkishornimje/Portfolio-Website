import React from 'react'

function Experience() {
  return (
    <div id='Experience' className='exp-container'>
      <div className='exp-first'>
        <h1 style={{marginbottom:'25px',}}>Designer</h1>
        <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet dui id lacus finibus mattis. Cras vulputate nisi eget erat semper, ac facilisis urna accumsan. Aliquam maximus quam ut quam laoreet, sit amet faucibus elit congue. Vivamus sit amet lectus mattis, lacinia enim vitae, eleifend leo. In lacinia id elit placerat dictum. Morbi nec tortor porttitor, auctor orci in, laoreet neque. Etiam et cursus libero.</p>      
      </div>

      <div className='exp-second'>
        <img src='eduimage.jpg' alt='pro-edu-img' id='edu-profile'/>
      </div>

      <div className='exp-third'>
          <h1>Coder</h1>
          <p data-aos="fade-up">
          Aenean commodo, nisi nec consectetur vehicula, tortor neque eleifend risus, et porta nunc nisl ultricies nibh. Nam efficitur neque ut finibus ultricies. Sed auctor odio sit amet turpis accumsan bibendum. Donec eget turpis a felis accumsan iaculis facilisis eget odio. Quisque varius tempus leo, vitae porttitor purus consectetur ac. Nulla a suscipit est. Sed ac metus et sapien placerat tincidunt. Vestibulum aliquam faucibus odio eget molestie.
          </p>
      </div>
    </div>
  )
}

export default Experience