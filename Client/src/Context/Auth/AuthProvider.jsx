/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// Importamos nuestras funciones asyncronas para hacer peticiones a la API
import { registerUser, loginUser } from "../../Api/Auth";
import { useContext, createContext, useState } from "react";

// Creamos nuestro contexto
export const AuthContext = createContext();

// Creamos una funcion que se encarge de realizar el uso del contexto
export const useAuth = () => {
  // Le decimos a useContext que lea nuestro contexto AuthContext
  const context = useContext(AuthContext);

  // Si no existe el contexto lo creamos con un estado vacío
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  // Creamos un estado para saber si hay un usuario o no
  const [user, setUser] = useState(null);
  // Creamos un estado para ver si el usuario esta autenticado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Creamos un estado para guardar los errores en caso}
  const [errorsRegister, setErrorsRegister] = useState([]);

  // Funcion que se encarga de registrar al usuario en la base de datos
  const signUp = async (user) => {
    try {
      // Enviamos los datos a la API y esperamos una respuesta
      const response = await registerUser(user);

      // Manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
      console.log("Respuesta del servidor:", response);

      //  Guardamos el usuario en el estado
      setUser(response.data);

      // Mostramos que el usuario está autenticado
      setIsAuthenticated(true);
    } catch (error) {
      // Guardamos los posibles errores en el estado
      setErrorsRegister(error.response.data);
    }
  };

  // Funcion que nos permite realizar el login
  const login = async (user) => {
    try {
      // Enviamos los datos a la API y esperamos una respuesta
      const response = await loginUser(user);

      // Mostramos en consola la respuesta
      console.log("Login: ", response);
    } catch (error) {
      // Guardamos los errores en el estado
      setErrorsRegister(error.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signUp, login, user, isAuthenticated, errorsRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};
