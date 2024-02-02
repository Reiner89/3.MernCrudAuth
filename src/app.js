// Importamos express
import express from "express";
// Importamos morgan
import morgan from "morgan";

// Creamos una instancia de express
export const app = express();

// Configuramos para que nuestra app use morgan
app.use(morgan("dev"));

// Indicamos el puerto en el que vamos a escuchar
export const port = 3000;
