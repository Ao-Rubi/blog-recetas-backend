export const crearReceta = (req, res)=>{
    res.send("crear una receta en la base de datos")
}
export const listarRecetas = (req, res)=>{
    res.send("envia la lista de las recetas")
}
export const obtenerRecetas = (req, res)=>{
    res.send("envio un objeto de una receta")
}
export const editarReceta = (req, res)=>{
    res.send("envio un objeto de receta para editar")
}
export const borrarReceta = (req, res)=>{
    res.send("borro una receta de cierto id de la base de datos")
}