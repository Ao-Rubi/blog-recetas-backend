import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listarRecetas, obtenerReceta } from "../controller/recetas.controller";

const router = Router();

//Rutas de las recetas
// dominio + /apiblog + /recetas
router.route("/recetas")
.get(listarRecetas)
.post(crearReceta)

router.route("/recetas/:id")
.get(obtenerReceta)
.put(editarReceta)
.delete(borrarReceta)

export default router;
