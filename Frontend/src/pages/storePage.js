import React from 'react';
import {useParams} from 'react-router-dom'
import '../Components/styles/storePage.css'
import Plazaimage from '../Components/styles/plazaPrimaveras.jpg'
import locales from '../Components/Locales'


function Store(props) {

   const params = useParams();

   const local = locales.find(local=>local.id === params.id)

 return(
   <div className="page__body">
      <div className="hero"></div>
      <div className="container-fluid element">
         <h1>{`${local.name} Local ${local.id} `}</h1>
         <div className="container-fluid page__store">
            <div className="header">
               <img className="img__plaza" alt="" src={Plazaimage}/>
            </div>
            <div className="descripcion__image">
               <img alt="" className="img__local" src={local.imagen}/>
            </div>
         </div>
      </div>

      <div className="element__info">
         <div className="page__info col-5">
            <h5>{local.giro}</h5>
            <p>Tel: {local.Tel}</p>
            <p>email: {local.email}</p>
         </div>
         <div className="text__horarios col-1">
            <h3>Horarios</h3>
         </div>
         <div className="hora__part1 col-2">
            <br/><br/>
            <p>{`L: ${local.Lunes}`}</p>
            <p>{`M: ${local.Martes}`}</p>
            <p>{`M: ${local.Miercoles}`}</p>
            <p>{`J: ${local.Jueves}`}</p>
            
         </div>
         <div className="hora__part2 col4">
            <br/><br/>
            <p>{`V: ${local.Viernes}`}</p>
            <p>{`S: ${local.Sabado}`}</p>
            <p>{`D: ${local.Domingo}`}</p>
         </div>
      </div>    
   </div>
 )


}

export default Store;