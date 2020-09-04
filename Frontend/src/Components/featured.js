import React from 'react';
import LocalCard from './localCard';
import './styles/featured.css';

function featured(props){

    return (
    <div className="container">
        <div className="seccion featured__seccion">
            <div className="row featured__container">
                
                <h3 
                className="header left grey-text featured__title">
                    <strong>Locales Destacados</strong>
                </h3>
                
            </div>
            <div className="row">
            <LocalCard></LocalCard>
            <LocalCard></LocalCard>
            <LocalCard></LocalCard>
            <LocalCard></LocalCard>
            </div>
        </div>
    </div>
    )
}

export default featured;