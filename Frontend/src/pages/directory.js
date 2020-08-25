import React from 'react'
import {} from 'react-router-dom'
import locales from '../Components/Locales'
import StoreCard from '../Components/storeCard'
import '../Components/styles/storeCard.css'



function Directory(props) {


  const localCards = locales.map(function(local){
    return <StoreCard local={local}></StoreCard>
  })
 return(
    <div className="row page__directory">
    {localCards}
    </div>
 )


}

export default Directory;