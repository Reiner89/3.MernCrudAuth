// Importamos axios
import axios from "axios";

// Definimos la URL base de la API REST y las credenciales para acceder a ella.
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default instance;
