import React from 'react';
import {Link} from 'react-router-dom'
function footer(props) {

 return(
 <footer class="page-footer pink darken-3">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="pink-text text-lighten-3"><strong>Nosotros</strong></h5>
                <p class="white-text  text-lighten-4">Plaza Primavera's es parte de Villa de Álvarez desde hace 8 años, fundada en 2012, nuestro objetivo siempre ha sido ofrecer una amplia y diversa gama de productos a nuestros clientes, así como espacios óptimos para todos nuestros locatarios.</p>
            </div>
            <div class="col l3 s12">
                <h5 class="pink-text text-lighten-3"><strong>Navegación</strong></h5>
                <ul>
                    <li><a class="white-text" href="#!">Home</a></li>
                    <li><a class="white-text" href="#!">Directorio</a></li>
                    <li><a class="white-text" href="#!">Contacto</a></li>
                </ul>
            </div>
            <div class="col l3 s12">
                <h5 class="pink-text text-lighten-3"><strong>Nuestras redes</strong></h5>
                <ul>
                    <li><a class="white-text" href="#!">Facebook</a></li>
                    <li><a class="white-text" href="#!">Instagram</a></li>
                </ul>
            </div>
      </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            <a class="orange-text text-orange darken-3" href="">Todos los derechos reservados. Plaza Primavera's © 2020</a>
        </div>
    </div>
</footer>
 )


}

export default footer;


