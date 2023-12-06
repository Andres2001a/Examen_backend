const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getCategoria, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria_producto')

route.get('/', getCategoria)

route.post('/', postCategoria)

route.put('/', putCategoria)

route.delete('/', deleteCategoria)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 