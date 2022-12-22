-- Trabaje con mysql local por lo que para ejecutar la aplicación es necesario 
-- crear la base de datos en el computador siguiendo los siguientes comandos

-- También se debe configurar la conexión a la base de datos que se encuentra
-- en el archivo src/server.js lineas 24-31 solo se debe cambiar el usuario y
-- la contraseña

-- creando la base de datos
CREATE DATABASE pruebatecnicaramguz;

-- Usar la base de datos
use pruebatecnicaramguz;

-- Creando tabla que almacenará la información de los municipios
CREATE TABLE municipio (
    id INT AUTO_INCREMENT NOT NULL,
    nombre_municipio VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

-- Insertar datos a la tabla municipio
INSERT INTO municipio (nombre_municipio) VALUES ('Bogotá'), ('Cali'), ('Cartagena'), ('Medellin');

-- Creando tabla que almacenará la información del cliente
CREATE TABLE cliente (
    id INT AUTO_INCREMENT NOT NULL,
    cedula VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    id_municipio INT NOT NULL,
    pqr VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_municipio) REFERENCES municipio(id)
);

-- Insertar datos a la tabla cliente
INSERT INTO cliente (cedula, nombre, contacto, email, direccion, id_municipio, pqr) 
VALUES 
(1223837654, 'Cristian Murcia', 3208796653, 'cristian@gmail.com', 'Carrera 6 #4-56', 1, 'Cerraron la puerta antes de la hora indicada'),
(0017896534, 'Alberto Saldarriaga', 3208796653, 'alberto@gmail.com', '#1-10', 4, 'Me atendieron una hora después'),
(2090765357, 'Martha López Nuñez', 3208796653, 'martha@gmail.com', 'Carrera 2 #8-53', 3, 'Hace falta un rampa de acceso para personas discapacitadas');


-- Estas consultas no son necesarias, con las anteriores ya se puede ejecutar la aplicación

-- Mostrar todas las tablas
SHOW TABLES;

-- Ver estructura de la tabla
describe clientes;

-- Ver contenido de la tabla municipio
SELECT * FROM municipio;

-- Ver contenido de la tabla municipio
SELECT * FROM cliente;

-- Consulta para ver toda la información del PQR mediante inner join
SELECT c.id, c.cedula, c.nombre, c.contacto, c.email, c.direccion, m.nombre_municipio, c.pqr FROM cliente c INNER JOIN municipio m ON c.id_municipio = m.id WHERE c.id = 4;