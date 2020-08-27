# Plaza Primaveras

## Proyecto 
   El proyecto es para acreditacion de curso Full Stack Javascript impartido por [BEDU](https://bedu.org/)

### Colaboradores del proyecto:
   * [Ilse Alejandra Polanco Isais](https://github.com/IlsePolanco)
   * [Jannay Salvador Tapia Guerrero](https://github.com/Blaheud)
   * [Erick Francisco Barreto Rocha](https://github.com/Efcobr)
   * [Francisco Javier Verduzco Vargas]()
   * [Edgar Fabian Osorio Alcala](https://github.com/FabianOAlca)
   

### Pre-requisitos 
   * Necesitas tener [NodeJS](https://nodejs.org/en/download/) instalado en tu computadora version 12.18.2
   * Backend desarrollado en famework de [Express](https://expressjs.com/es/)
   * Frontend desarrollado en famework [React Js](https://es.reactjs.org/)
   * Gestor de base de datos, recomendado [PostgresSQL](https://www.postgresql.org/)
   

## Instalacion
   

* 1.- Clonalo 
    ```
    git clone https://github.com/FabianOAlca/PlazaPrimaveras.git
    ```
    * Para trabajar en el backend
    ```
    cd PlazaPrimaveras 
    ```
    * Para trabajar en el Frontend con React Js
       ```
         cd PlazaPrimaveras/Frontend
         npm install
         npm run start
       ```
    
* 2.- Crea archivo .env en raiz para las variables de entorno
    Se recomienda Postgresql
    Ejemplo: 
    ```
    DATABASE_URL= postgres://USER:PASSWORD@localhost:PORT/DATABASE_NAME
    ```
* 3.- Corre en la carpeta raiz del proyecto para instalar dependencias
    ```
    npm install
    ```
* 4.- Corre migraciones y seeders para inicializar datos por defecto 
     ```
    ./node_modules/.bin/sequelize db:migrate
    ./node_modules/.bin/sequelize db:seed:all
    ```

* 5.- Correr Servidor corre en el puerto localhost//4000
    ```
    npm run dev
    ```

* 6.- Se requieren software para simular peticiones tales como [Postman](https://www.postman.com/) e [Insombian](https://insomnia.rest/download/), solo para trabajar con el backend como api

