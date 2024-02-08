// Importamos axios
import axios from "axios";

// Definimos el nombre del modulo y su exportación
export const url = "http://localhost:3000/api";

// Funcion para el registro de usuarios
export const registerUser = async (user) => {
  // Enviamos una peticion POST a la URL definida con los datos del usuario
  const response = await axios.post(url + "/register", user);

  //  Retornamos la respuesta del servidor
  return response;
};
