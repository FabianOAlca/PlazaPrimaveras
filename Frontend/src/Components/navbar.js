import React from 'react';
import {Link} from 'react-router-dom'
function Navbar(props) {

 return(
   <div className="navbar-fixed">
   <nav className="pink darken-3" role="navigation">
     <div className="nav-wrapper container"><a id="logo-container" href="" className="brand-logo"></a>
       <img src="./resources/logo.svg" />
       <ul className="right hide-on-med-and-down">
         <li><Link to="/home">Home</Link></li>
         <li><Link to="/direcotory">Directorio</Link></li>
         <li><Link to="/contact">Contacto</Link></li>
         <li><Link to="/login">Login</Link></li>
       </ul>
 
       <ul id="nav-mobile" className="sidenav">
         <li><a href="#">Home</a></li>
         <li><a href="#">Directorio</a></li>
         <li><a href="#">Contacto</a></li>
       </ul>
       <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
     </div>
   </nav>
   </div>
 )


}

export default Navbar;


