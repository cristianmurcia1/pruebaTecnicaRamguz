// Objeto que almacenará cada función para luego llamarlas en la configuración de los endpoint
const controlador = {};

// Funcion encargada de listar los registros de la tabla cliente
controlador.listar = (req, res) => {
    //Conexión a la base de datos
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, clientes) => {
            if (err){
                res.json(err);
            }
            //Renderizar la vista
            console.log(clientes);
            res.render('clientes', {
                datos: clientes
            });
        });
    });
};

// Funcion encargada de guardar los PQR en la tabla cliente
controlador.guardarPqr = (req, res) => {
    const datos = req.body;

    //Conexión a la base de datos
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cliente SET ?', [datos], (err, cliente) => {
            //console.log(cliente);
            res.redirect('/');
        });
    });
};

// Funcion encargada de consultar y retornar la información detallada del PQR de un cliente
controlador.visualizarPqr = (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;

    //Conexión a la base de datos
    req.getConnection((err, conn) => {
        conn.query('SELECT c.id, c.cedula, c.nombre, c.contacto, c.email, c.direccion, m.nombre_municipio, c.pqr FROM cliente c INNER JOIN municipio m ON c.id_municipio = m.id WHERE c.id = ?;', 
        [id], (err, cliente) => {
            // console.log(cliente[0].nombre);
            res.render('visualizarInformacion', {
                datos: cliente[0]
            });
        });
    });
};

module.exports = controlador;