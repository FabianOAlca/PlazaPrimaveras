import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Banner from './Components/banner';
import Icons from './Components/icons';
import Contact from './pages/contact';
import './Components/styles/home.css';

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>

      <Route path="/home">
        <Banner></Banner>
        <Icons></Icons>
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
      <Route path ="/store/:id">
      
      </Route>

    
    </div>
  );
}

export default App;
