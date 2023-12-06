const {Schema, model} = require('mongoose')

const ProductoSchema = ({
    id_producto:{
        type: Number,
        unique:true,
        required:[true, 'El id del producto es necesario']
    },

    nombre_producto:{
        type: String,
        unique: false,
        required:[true, 'El nombre productos es requerido'],
    },

    talla: {
        type:String,
        unique: false,
        required:[true, 'La talla es requerida'],
    },

    descripcion_producto: {
        type:String,
        unique: false,
        required:[true, 'La descripcion del producto es requerida'],
    },
    precio_Dolar:{
        type:Number,
        unique:false,
        require:[true,'precio dolar'],
    }


})


module.exports = model('Producto', ProductoSchema)