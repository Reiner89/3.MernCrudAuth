// Importamos Router de express
import { Router } from "express";

// Importamos las funciones que se ejecutaran al realizar una peticion a cada ruta
import {
  loginRequest,
  logoutRequest,
  profileRequest,
  registerRequest,
  verifyTokenRequest,
} from "../Controllers/AuthController.js";

// Importamos la funcion que se encargara de proteger las rutas
import { authRequired } from "../Middlewares/ValidateToken.js";

// Importamos las funciones con las validaciones correspondientes para los campos del formulario
import { registerSchema, loginSchema } from "../Schemas/auth.schema.js";

// Importamos la funcion que ejecutara la validacion de los campos del formulario
import { validateSchema } from "../Middlewares/Validator.Middleware.js";

// Instanciamos el router de express.js
const router = Router();

// Creamos las rutas de nuestra aplicacion

// Ruta para registrarnos con su validacion
router.post("/api/register", validateSchema(registerSchema), registerRequest);

//  Ruta para loguearnos con su validacion
router.post("/api/login", validateSchema(loginSchema), loginRequest);

// Ruta para el logOut
router.post("/api/logout", logoutRequest);

// Ruta para el perfil
router.get("/api/profile", authRequired, profileRequest);

// Ruta para verificar el token
router.get("/api/verify", verifyTokenRequest);

// Exportamos la variable router con todas las rutas creadas en ella
export default router;
