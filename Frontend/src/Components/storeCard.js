import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './styles/storeCard.css'



function useQuery(){
    return new URLSearchParams(useLocation().search)
}

function storeCard(props) {
    const{local} = props;


 return(
    <div className="store__card">
        <Link className="link__card" to={`/store/${local.id}`}>
        
            <img className="imageLocal__card" 
            src={local.imagen} 
            alt="Imagen Local"
            />
            <label className="name__card">
                {local.name}
            </label>
            <label className="giro__card">
                {local.giro}
            </label>

        </Link>

  </div>
 )


}

export default storeCard;