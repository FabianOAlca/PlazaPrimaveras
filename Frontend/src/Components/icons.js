import React from 'react';

function icons(props){

  return (
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center deep orange-text text-darken-4"><i class="material-icons">local_grocery_store</i></h2>
              <h5 class="center">Productos locales y frescos</h5>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center deep orange-text text-darken-4"><i class="material-icons">local_pharmacy</i></h2>
              <h5 class="center">Consultorios y medicamentos</h5>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center deep orange-text text-darken-4"><i class="material-icons">local_laundry_service</i></h2>
              <h5 class="center">Limpieza de ropa y accesorios</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default icons;