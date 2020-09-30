import React from 'react'
import Map from '../Components/map';
import Galery from '../Components/galery';
import './styles/booth.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


const credential= process.env.REACT_APP_GOOGLE_CREDENTIAL;

function Booth(props) {
  let { numLocal, face_profile } = useParams();
  return(
      <div className="container">
          <div className="seccion">
              <div className="row">
  <h3 className="header left grey-text"><strong>{`Local ${numLocal}`}</strong></h3>  
              </div>
              <div className="row s12">
                  <div className="col l4 s4">
                      <img id="detail-banner" src="/images/plazaPrimaveras.jpg"/> 
                  </div>
                  <div className="col l8 s8">                  
                    <img src={`http://graph.facebook.com/${face_profile}/picture?width=500&height=500`}/> 
                  </div>
              </div>
              <div className="row s12">
                  <div className="col l4 s4">
                      <h5 className="grey-text text-darken-2"><strong>Datos</strong></h5>
                      <p className="grey-text aboutUs__datos"><strong>Teléfono: { /*Fetch it from Facebook */ }</strong></p>
                      <p className="grey-text aboutUs__datos"><strong> Correo: { /*Fetch it from Facebook */ }</strong></p>
                      <div className="row">
                          <div className="col l1 s3">
                              <a href="https://www.facebook.com/plazaprimaveras" target="_blank">
                                  <img id="fb-icon" src="https://image.flaticon.com/icons/svg/1384/1384005.svg"/>
                              </a>
                          </div>
                          <div className="col l1 s3">
                              <a href="https://www.instagram.com/explore/locations/1494369384216283/plaza-primaveras/?hl=en" target="_blank">
                                <img id="ig-icon" src="https://image.flaticon.com/icons/svg/1384/1384015.svg"/>
                              </a>  
                          </div>
                      </div>
                  </div>
                  <div className="col l8 s8">
                      <p className="aboutUs__description">Aquí va una breve descripción del local en cuestión; podría ser 
                      que se llame la información desde la API de Facebook, tal cual se hizo con las imágenes de los locales.
                      <br></br>Si quieres saber que locales tenemos en <strong>Renta</strong>, 
                       entra <Link to="/directory"><strong>aquí</strong></Link> en el apartado de <strong>disponibles</strong></p>
                  </div>                    
              </div>         
          </div>
      </div>

  )
}

export default Booth;