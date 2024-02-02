// Importamos mongoose
import mongoose from "mongoose";

// Si no se conecta usando: await mongoose.connect("mongodb://localhost/merndb") posiblemente sea por la version de nodeJS asi probe con la version de abajo y la coneccion se realizo


// Creamos una funcion para realizar la conexión a la base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/merndb");
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.log("Error al intentar conectarnos con la BD: ", error);
  }
};
