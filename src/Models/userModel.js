// Crearemos nuestro primer esquema de mongoose para usuarios
import mongoose from "mongoose";

// Cuando creamos un esquema creamos un objeto de tipo Schema que nos permite definir los campos y tipos de datos a validar
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Una vez creado el esquema, creamos un modelo para que a partir del esquema puedas interactuar con la base de datos
export default mongoose.model("User", userSchema);
