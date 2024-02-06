// Importamos Router de express
import { Router } from "express";

// Importamos las funciones que se ejecutaran al realizar una peticion a cada ruta
import {
  loginRequest,
  logoutRequest,
  profileRequest,
  registerRequest,
} from "../Controllers/AuthController.js";

// Importamos la funcion que se encargara de proteger las rutas
import { authRequired } from "../Middlewares/AuthRequired.js";

// Instanciamos el router de express.js
const router = Router();

// Creamos las rutas de nuestra aplicacion

// Ruta para registrarnos
router.post("/api/register", registerRequest);

//  Ruta para loguearnos
router.post("/api/login", loginRequest);

// Ruta para el logOut
router.post("/api/logout", logoutRequest);

// Ruta para el perfil
router.get("/api/profile", authRequired, profileRequest);

// Exportamos la variable router con todas las rutas creadas en ella
export default router;
