
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import {Routes,Route} from 'react-router-dom';
import Education from './components/pages/Education';
import Work from './components/pages/Work';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';
import Aos from 'aos';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{

    Aos.init({duration:2000});
  
    },[]);


  return (
    <div>
       <Navbar/>
    <div className='Multipage-container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About'  element={<About/>}/>
      <Route path='Skills' element={<Skills/>}/>
      <Route path='Education' element={<Education/>}/>
      <Route path='Work' element={<Work/>}/>
      <Route path='Experience' element={<Experience/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
