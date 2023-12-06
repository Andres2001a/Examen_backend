const {Schema, model} = require('mongoose')

const CategoriaSchema = ({
    id_categoria:{
        type: Number,
        unique:false,
        required:[true, 'El id de la categoria del producto es necesario']
    },

    nombre_categoria:{
        type:String,
        unique: false,
        required:[true, 'El nombre de la categoria es requerido'],
    },

    descripcion_categoria: {
        type: String,
        required:[true, 'la descripcion de la categoria es requerida'],
    }
})


module.exports = model('Categoria', CategoriaSchema)