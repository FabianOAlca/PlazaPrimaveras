import React from 'react';
import {Link} from 'react-router-dom'
function Navbar(props) {

 return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/home">HOME</Link>
            <Link className="navbar-brand" to="/directory">DIRECTORIO</Link>
            <Link className="navbar-brand" to="/releases">COMUNICADOS</Link>
            <Link className="navbar-brand" to="/contact">CONTACTO</Link>
        </nav>
    </div>
 )


}

export default Navbar;


