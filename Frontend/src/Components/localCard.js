import React from 'react';
import './styles/localCard.css'

function localCard(props){

    return (
    <div className="col s12 m4 l3">
        <div className="card">
            <div className="card-image">
                <img src="./resources/Local1.jpg"/>
                    <span className="card-title">Local 1</span>
            </div>
            <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <a href="#">Conocer más</a>
            </div>
        </div>
    </div>
    )
}

export default localCard;