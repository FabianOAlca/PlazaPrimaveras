import React, {useEffect,useState} from 'react';
import BoothCard from '../Components/boothCard';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Available(props) {
   
   const [booths, setbooths] = useState([]);
   
   // function to get all messy info from backend 
   async function fetchbooths() {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/locales/`);
      setbooths(response.data)
    }
   useEffect(()=>{
      fetchbooths();
   },[])
   

   // filter the booths by rented and no rented
   const boothsFiltered = booths.filter((doFiltered)=>{
      return doFiltered.rented == false;
   })

   // Order the list booths rented 
  const boothsOrder = boothsFiltered.sort((a,b)=>{
     if (Number(a.numLocal) > Number(b.numLocal)) {
         return 1;
      }
      if (Number(a.numLocal) < Number(b.numLocal)) {
         return -1;
      }
      return 0;
   })
   // render the order booths cards 
   const boothCards = boothsOrder.map((booth)=>{
      return <BoothCard booth={booth}></BoothCard>
   })

   return (
   <div className="container">
      <div className="seccion">
         <div className="row">
            <h3 className="header left grey-text"><strong>Directorio</strong></h3>
         </div>
         <div className="col s6 nav__directory ">
               <ul className="tabs center">
                  <li className="tab col s5"><Link className="active li__nav__available" to="/rented">Locales</Link></li>
                  <li className="tab col s5 disabled"><Link className="li__nav__available" to="/available">Disponibles</Link></li>
               </ul>
        </div>
         <div className="row">
            <div className="row">               
               {boothCards}                          
            </div>
         </div>
      </div>
   </div>
 )

}

export default Available;