const {response} = require('express')

Producto = require('../models/producto')

const getProducto = async(req, res) => {
    const productos = await Producto.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: productos
    })
}

const postProducto = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const producto = new Producto(datos) //Instanciar el objeto
        await producto.save()//Guardar en la base de dato  
        console.log(producto) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putProducto = async(req, res) =>{
    const {id_producto, nombre_producto, talla, descripcion_producto,precio_Dolar} = req.body
    try {
        const producto = await Producto.findOneAndUpdate({id_producto: id_producto},
            {nombre_producto:nombre_producto, talla:talla, descripcion_producto:descripcion_producto,precio_Dolar:precio_Dolar
            })
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    } 
    res.json({
        msg:mensaje
    })
    
}

const deleteProducto = async(req, res) =>{
    const {id_producto} = req.query //Desestructurar
    let mensaje = ''
    try {
        const producto = await Producto.findOneAndDelete({id_producto: id_producto})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}