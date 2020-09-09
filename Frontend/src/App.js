import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Banner from './Components/banner';
import Icons from './Components/icons';
import Featured from './Components/featured'
import Directory from './pages/directory';
import Contact from './pages/contact';
import './Components/styles/home.css';
import Available from './pages/available';


function App() {


  return (
    <div className="App">
      <Navbar></Navbar>

      <Route path="/home">
        <Banner></Banner>
        <Icons></Icons>
        <Featured></Featured>
      </Route>
      <Route path="/rented">
        <Directory></Directory>
      </Route>
      <Route path="/available">
        <Available></Available>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path ="/booth">
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
