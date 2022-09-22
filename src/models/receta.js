import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        minlength:5,
        maxlength:50
    },
    descripcion: {
        type: String,
        required: true,
        minlength:5,
        maxlength:9000
    },
    imagen: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
        maxlength: 40
    }
})

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;