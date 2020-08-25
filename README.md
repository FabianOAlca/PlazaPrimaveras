# Plaza Primaveras Backend

* Para correrlo 

< Necesitas tener [NodeJS](https://nodejs.org/en/download/) instalado en tu computadora version 12.18.2>

* 1.- Clonalo 
    ```
    git clone https://github.com/FabianOAlca/PlazaPrimaveras.git
    ```
    Para trabajar en el backend
    ```
    cd PlazaPrimaveras 
    ```
    Para trabajar en el Frontend con React Js
    ```
    cd Plazaprimaveras/Frontend
    ```
* 2.- Crea archivo .env en raiz para las variables de entorno
    < Se recomienda Postgresql>
    <Ejemplo: 
    ```
    DATABASE_URL= postgres://USER:PASSWORD@localhost:PORT/DATABASE_NAME >
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
    < Tambien se puede agregar datos ingresando en el body de un post, pueden ser postman o insomnia >

* 5.- Correr Servidor corre en el puerto localhost//4000
    ```
    npm run dev
    ```

* 6.- Se requieren softwares para simular peticiones tales como [Postman](https://www.postman.com/) e [Insombian](https://insomnia.rest/download/), solo para trabajar con el backend como api

