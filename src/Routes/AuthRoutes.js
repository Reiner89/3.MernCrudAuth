// Importamos Router de express
import { Router } from "express";

// Importamos las funciones que se ejecutaran al realizar una peticion a cada ruta
import {
  loginRequest,
  registerRequest,
} from "../Controllers/AuthController.js";

// Instanciamos el router de express.js
const router = Router();

// Creamos las rutas de nuestra aplicacion

// Ruta para registrarnos
router.post("/api/register", registerRequest);

//  Ruta para loguearnos
router.post("/api/login", loginRequest);

// Exportamos la variable router con todas las rutas creadas en ella
export default router;
