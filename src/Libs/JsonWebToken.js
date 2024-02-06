// Importamos el Json Web Token
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

// Creamos una funcion para crear un token de acceso, el payload es donde ira la informacion que queremos enviar encriptada, el TOKEN_SECRET es una llave secreta, le damo el tiempo en el que este token va a expirar

export const createAccesToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "15m" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
