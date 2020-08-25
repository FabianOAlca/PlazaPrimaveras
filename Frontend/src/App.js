import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer'
import Contact from './pages/contact';
import Directory from './pages/directory';
import Location from './pages/location';
import Releases from './pages/releases';
import StorePage from './pages/storePage';
import './Components/styles/home.css';

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Route path="/home">
      <div lassName="chome__page">
        <h1 className="titulo__home">Plaza <br/> Primavera's</h1>
        <p className="descripcion__home">Descripcion Primavera's</p>
      </div>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/directory">
        <Directory></Directory>
      </Route>
      <Route path="/map">
        <Location></Location>
      </Route>
      <Route path="/releases">
        <Releases></Releases>
      </Route>
      <Route path ="/store/:id">
        <StorePage></StorePage>
      </Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
