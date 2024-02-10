// Importamos axios
import axios from "./AxiosConfiguration";

// Funcion para el registro de usuarios
export const registerUser = async (user) => {
  // Enviamos una peticion POST a la URL definida con los datos del usuario
  const response = await axios.post("/register", user);

  //  Retornamos la respuesta del servidor
  return response;
};

// Funcion para el logeo de usuarios
export const loginUser = async (user) => {
  // Ennviamos una peticion POST a la URL definida con los datos del login
  const response = await axios.post("/login", user);

  // Retornamos la respuesta del servidor
  return response;
};

// Creamos una funcion que verifica si el token existe para traer los datos del backend
export const verifyToken = () => {
  // Realizamos una peticion  GET a /auth/verify
  return axios.get("/verify");
};
