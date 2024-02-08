// Importamos express
import express from "express";

// Importamos morgan
import morgan from "morgan";

// Importamos cookie-parser
import cookieParser from "cookie-parser";

// Importamos cors
import cors from "cors";

// Importamos nuestro archivo con las rutas
import authRoutes from "./Routes/auth.routes.js";

// Importamos las rutas de nuestros tasks
import taskRoutes from "./Routes/tasks.routes.js";

// Creamos una instancia de express
export const app = express();

// Usamos cors para permitir peticiones desde cualquier puerto
app.use(cors());

// Configuramos para que nuestra app use morgan
app.use(morgan("dev"));

// Indicamos que el body de los requests se recibira en formato JSON
app.use(express.json());

// Permitimos que express lea cookies del cliente en formato de json
app.use(cookieParser());

// Le decimos a nuestra aplicacion que utilice las rutas
app.use(authRoutes);

// Le decirmos a nuestra aplicación que utilize las rutas de nuestras tareas
app.use(taskRoutes);

// Indicamos el puerto en el que vamos a escuchar
export const port = 3000;
