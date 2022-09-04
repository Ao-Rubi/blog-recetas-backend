import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listarRecetas, obtenerRecetas } from "../controller/recetas.controller";

const router = Router();

//Rutas de las recetas
// dominio + /apiblog + /recetas
router.route("/recetas").get(listarRecetas).post(crearReceta)

router.route("/recetas/:id").get(obtenerRecetas).put(editarReceta).delete(borrarReceta)

export default router;
