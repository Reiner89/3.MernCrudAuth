/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

// Importamos nuestras funciones asyncronas para hacer peticiones a la API
import { registerUser, loginUser, verifyToken } from "../../Api/Auth";
import { useContext, createContext, useState, useEffect } from "react";

// Importamos js-cookie
import Cookies from "js-cookie";

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

  // Creamos un estado para ver si se estan cargando los datos del usuario con token del backend o no
  const [loading, setLoading] = useState(true);

  // Funcion que se encarga de registrar al usuario en la base de datos
  const signUp = async (user) => {
    try {
      // Enviamos los datos a la API y esperamos una respuesta
      const response = await registerUser(user);

      // Manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
      console.log("Register:", response);

      //  Guardamos el usuario en el estado
      setUser(response.data);

      // Cambiamos el estado de autenticación a verdadero
      setIsAuthenticated(true);
    } catch (error) {
      // Si error es un array asignamos el error normal a serErrorsRegister
      if (Array.isArray(error.response.data)) {
        return setErrorsRegister(error.response.data);
      }
      // , si no, convertimos el error a un array y así poder mostrarlo
      setErrorsRegister([error.response.data.message]);
    }
  };

  // Funcion que nos permite realizar el login
  const login = async (user) => {
    try {
      // Enviamos los datos a la API y esperamos una respuesta
      const response = await loginUser(user);

      // Mostramos en consola la respuesta
      console.log("Login: ", response);

      // Una vez logeado el usuario,
      // lo guardamos en el estado
      setUser(response.data);

      // y cambiamos el estado de autenticación a verdad
      setIsAuthenticated(true);
    } catch (error) {
      // Guardamos los errores en el estado
      // setErrorsRegister(error.response.data);
      // Si error es un array asignamos el error normal a serErrorsRegister
      if (Array.isArray(error.response.data)) {
        return setErrorsRegister(error.response.data);
      }
      // , si no, convertimos el error a un array y así poder mostrarlo
      setErrorsRegister([error.response.data.message]);
    }
  };

  // useEffect para darle un setTimeuot a la alerta y limpiarla
  useEffect(() => {
    if (errorsRegister.length > 0) {
      const timer = setTimeout(() => {
        setErrorsRegister([]);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [errorsRegister]);

  // Funcion para verificar el token y cambiar los estados de autenticacion y redireccionamiento
  const checkToken = async () => {
    // Obtenemos las cookies del navegador y lo guardamos
    const cookies = Cookies.get();

    // Primero comprobamos que no haya una cookie llamada "token"
    if (!cookies.token) {
      setIsAuthenticated(false);
      setLoading(false);
      return setUser(null);
    }

    // Si hay un token en la cookie verificalo
    try {
      // Verificamos el token con nuestro backend
      const res = await verifyToken(cookies.token);

      // Si no se ha podido verificar el token volvemos a cerrar sesión
      if (!res.data) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      // Si se logro verificar el token actualizamos los estados correspondientes
      setIsAuthenticated(true);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error al verificar el token: ", error);
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);

      // Si no está autorizado, le asignamos el mensaje a errorsRegister
      // Si error es un array asignamos el error normal a serErrorsRegister
      if (Array.isArray(error.response.data)) {
        return setErrorsRegister(error.response.data);
      }
      // , si no, convertimos el error a un array y así poder mostrarlo
      setErrorsRegister([error.response.data.message]);
    }
  };

  // Mostramos las cookie ni bien se monte el componente
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, login, user, isAuthenticated, errorsRegister, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
