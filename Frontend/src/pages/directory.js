import React, {useEffect,useState} from 'react';
import BoothCard from '../Components/boothCard';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './styles/directory.css'
import M from 'materialize-css';


function Directory(props) {
   
   const [booths, setbooths] = useState([]);
   
   // function to get all messy info from backend 
   async function fetchbooths() {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/locales/`);
      setbooths(response.data)
   }
   
   useEffect(()=>{
      fetchbooths();
      const el = document.querySelector('.tabs');
      M.Tabs.init(el, {});
   },[])
   
   // Order the list booths rented 
   const boothsOrder = booths.sort((a,b)=>{
      if (Number(a.numLocal) > Number(b.numLocal)) {
         return 1;
      }
      if (Number(a.numLocal) < Number(b.numLocal)) {
         return -1;
      }
      return 0;
   }) 

   // filter the booths by rented and no rented
   const boothsFilteredRented = boothsOrder.filter((doFiltered)=>{
      return doFiltered.rented == true;
   })
   const boothsFilteredAvailable = boothsOrder.filter((doFiltered)=>{
      return doFiltered.rented == false;
   })

  
   // render the order booths cards 
   const boothCardsRented = boothsFilteredRented.map((booth)=>{
      return <BoothCard booth={booth}></BoothCard>
   })

   const boothCardsAvailable = boothsFilteredAvailable.map((booth)=>{
      return <BoothCard booth={booth}></BoothCard>
   })

   return (
   <div className="container">
      <div className="seccion">
         <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s6 "><Link className="active" to="#rented">Locales</Link></li>
                    <li className="tab col s6 "><Link className="" to="#available">Disponibles</Link></li>
                 </ul>
            </div>
            <div id="available" className="row"> {boothCardsAvailable} </div>
            <div id="rented" className="col s12"> {boothCardsRented } </div>
         </div>
      </div>
   </div>
 )

}

export default Directory;