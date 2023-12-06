const {response} = require('express')

Categoria = require('../models/categoria_producto')

const getCategoria = async(req, res) => {
    const categorias = await Categoria.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: categorias
    })
}

const postCategoria = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const categoria = new Categoria(datos) //Instanciar el objeto
        await categoria.save()//Guardar en la base de dato  
        console.log(categoria) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putCategoria = async(req, res) =>{
    const {id_categoria, nombre_categoria, descripcion_categoria} = req.body
    try {
        const categoria = await Categoria.findOneAndUpdate({id_categoria: id_categoria},
            {nombre_categoria:nombre_categoria, descripcion_categoria:descripcion_categoria
            })
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteCategoria = async(req, res) =>{
    const {id_categoria} = req.query //Desestructurar
    try {
        const categoria = await Categoria.findOneAndDelete({id_categoria: id_categoria})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}