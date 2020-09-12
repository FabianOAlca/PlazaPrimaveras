import React from 'react';
import './styles/boothCard.css'
import {Link} from 'react-router'

function BoothCard(props){

   const  {numLocal,description,face_profile,name}= props.booth

    return (
    <div className="col s12 m4 l3 booth__card">
        <div className="card">
            <div className="card-image">
                <img src={`http://graph.facebook.com/${face_profile}/picture?width=500&height=500`}/> 
                    <span className="card-title booth__title">{`Local ${numLocal}`}</span>
            </div>
            <div className="card-content booth__description">
                <p className="booth__content__description"> {description} </p>
                <p className="center"> {name} </p>
            </div>
            <div className="card-action center">
                <a href="#">Conocer más</a>
            </div>
        </div>
    </div>
    )
}

export default BoothCard;