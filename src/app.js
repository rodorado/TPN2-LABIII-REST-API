import express from "express";
import mysql from 'mysql2';
import usuariosRutas from './routes/usuarios.routes.js';
import productosRutas from './routes/productos.routes.js';

/*app.js tiene todas las configuraciones de express*/

/*Esto es de la base de datos, la conexión*/
const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '102030',
     port: '3306',   
     database: 'Dorado_Vazquez'
   });

  
   const app = express()
  

   app.use(express.json()); /*es para pedirle a app que use el metodo json de express y pueda ejecutar todas las rutas*/

   /*Llamar las rutas aquí*/
   app.use('/api', usuariosRutas);
   app.use('/api', productosRutas);
   

   /*If para validar si la ruta existe o no*/
   app.use((req, res, netx) => {
    res.status(404).json({
      message: 'Ruta no encontrada'
    })
   })

    /*IF para ver si está corriendo la base de datos*/
    connection.connect((error) => {
        if (error) {
          console.error('Error al conectar a la base de datos:', error);
        } else {
          console.log('Conexión exitosa a la base de datos.');
        }
      });
    
   export default app; 