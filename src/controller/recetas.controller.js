import Receta from "../models/receta";

export const crearReceta = async (req, res)=>{
    try {
        console.log(req.body)
        //Crear un objeto para guardar en la base de datos
        const nuevaReceta = new Receta({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            categoria: req.body.categoria
        });

        //guardar efectivamente en la base de datos
        await nuevaReceta.save()
        //enviar respuesta al frontend
        res.status(201).json({
            mensaje: "La receta fue creada exitosamente"
        })
        //si algo falla tambien enviar una respuesta

    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "La receta no pudo ser creada"
        })
    }
}

export const listarRecetas = async (req, res)=>{
    try {
        //Buscar en la base de datos la coleccion de productos
        const listaRecetas = await Receta.find();
        //enviar la respuesta
        res.status(200).json(listaRecetas);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar las recetas"
        })
    }
}
export const obtenerReceta = async (req, res)=>{
    try {
        const recetaBuscada = await Receta.findById(req.params.id);
        //Envio respuesta
        res.status(200).json(recetaBuscada);

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al buscar la receta"
        })
    }
}
export const editarReceta = async (req, res)=>{
    try {
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "Receta editada correctamente"
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al editar la receta"
        })
    }
}
export const borrarReceta = async (req, res)=>{
    try {
        await Receta.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "Receta borrada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al intentar borrar la receta"
        })
    }
}