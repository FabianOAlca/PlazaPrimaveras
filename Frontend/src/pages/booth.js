import React from 'react';
import {Link} from 'react-router-dom';

function booth(props) {
 return (
  <div>
    <div className="container">
      <h3 class="header left grey-text"><strong>Nombre del Local 1</strong></h3>
    </div>
    <div class="container pink darken-3">
      <div class="row">
        <div class="col l3 s12">
          <div class="center">            
            <img src="./resources/logo.svg"/>
          </div>
        </div>
          <div class="col l9 s12">
            <img id="detail-banner" src="./resources/mall.jpg" />
          </div>
      </div>
    </div>  
  </div>

 )

}

export default booth;