// Para eso importamos jsonwebtoken
import jwt from "jsonwebtoken";

// Importamos nuestro token secreto
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  // Primero verificamos si hay un token de inicio de sesion
  const { token } = req.cookies;

  // Primero vemos por consola que este se este mostrando
  // console.log(token);

  // Paso siguiente hacemos la validacion
  if (!token)
    return res.status(401).send({ message: "No hay token, acceso denegado" });

  // Paso siguiente validamos el token con nuestra clave secreta, para esto hacemos uso del middleware verify() de jsonwebtoken
  try {
    // Si el token no tiene una estructura valida lo rechazamos
    const decoded = jwt.verify(token, TOKEN_SECRET);

    // Guardamos los datos del usuario en las propiedades de la peticion para futuras operaciones
    req.user = decoded;

    // Si todo salio bien que pase a la siguiente funcion
    next();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
