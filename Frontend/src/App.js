import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Banner from './Components/banner';
import Icons from './Components/icons';
import Featured from './Components/featured'
import Contact from './pages/contact';
import Booth from './pages/booth';
import './Components/styles/home.css';
import './Components/styles/navbar.css'

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>

      <Route path="/home">
        <Banner></Banner>
        <Icons></Icons>
        <Featured></Featured>
      </Route>
    
      <Route path="/contact">
       <Contact></Contact>
      </Route>
      <Route path="/directory">
       
      </Route>
      <Route path="/map">
       
      </Route>
      <Route path="/releases">
      
      </Route>
      <Route path ="/booth/:numlocal">
        <Booth></Booth>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
