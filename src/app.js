// Importamos express
import express from "express";
// Importamos morgan
import morgan from "morgan";
// Importamos nuestro archivo con las rutas
import authRoutes from "./Routes/AuthRoutes.js";

// Creamos una instancia de express
export const app = express();

// Configuramos para que nuestra app use morgan
app.use(morgan("dev"));

// Indicamos que el body de los requests se recibira en formato JSON
app.use(express.json());

// Le decimos a nuestra aplicacion que utilice las rutas
app.use(authRoutes);

// Indicamos el puerto en el que vamos a escuchar
export const port = 3000;
