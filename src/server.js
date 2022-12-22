//Módulos necesarios para iniciar el servidor, conexión a la BD y validaciones
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const mysqlConnection = require('express-myconnection');
const app = express();
const { urlencoded } = require('express');

//Importando rutas de la aplicación
const rutasCliente =  require('./routes/cliente');

//Configuración de express
app.set('port', process.env.PORT || 3000);
//ejs como motor de plantillas
app.set('view engine', 'ejs');
//Ruta de la carpeta views
app.set('views', path.join(__dirname, 'views'));


//Middlewares - se ejecutan antes de las peticiones de los usuarios
app.use(morgan('dev'));

//Conexión a la base de datos
app.use(mysqlConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root123',
    port: 3306,
    database: 'pruebatecnicaramguz'
}, 'single'));

//Analizar los req
app.use(express.urlencoded({ extended: false }));


//Rutas del servidor
app.use('/', rutasCliente);

// //Archivos estáticos (mejorar la app)
// app.use(express.static(path.join(__dirname, 'public')));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('El servidor se esta ejecutando en el puerto 3000');
});