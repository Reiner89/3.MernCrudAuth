// Importamos el modelo de nuestro usuario
import User from "../Models/userModel.js";

// Importamos el modulo para encriptar nuestra contraseña
import bcrypt from "bcryptjs";

// Importamos el modulo para generar un token
import { createAccesToken } from "../Libs/JsonWebToken.js";

// Funcion para el registro de un nuevo usuario al entrar a la ruta
export const registerRequest = async (req, res) => {
  // Le indicamos los valores que se van a recibir del formulario
  var { email, password, username } = req.body;

  try {
    // Encriptamos la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Le pasamos los datos a nuestro modelo
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // Lo guardamos en la BD
    const userSaved = await newUser.save();

    // Creamos un token con el id del usuario
    const accessToken = await createAccesToken({ id: userSaved._id });

    // Lo almaceno en una cookie el token
    res.cookie("token", accessToken);

    // Devolvemos los datos necesarios para el frontend
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    // Retornamos un status code en caso de error
    res.status(500).json({ message: error.message });
  }
};

// Funcion para el logeo del usuario al entrar a la ruta
export const loginRequest = async (req, res) => {
  // Le indicamos los valores que vamos a necesitar para el login
  var { email, password } = req.body;

  try {
    // Buscamos si existe ese correo en la base de datos
    let userLogged = await User.findOne({ email });
    if (!userLogged) {
      return res.status(400).json({
        message: "El usuario no se encuentra registrado.",
      });
    }

    // Comprobamos la contraseña
    const validPassword = await bcrypt.compare(password, userLogged.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "La contraseña es incorrecta.",
      });
    }

    // Creamos un token con el id del usuario
    const accessToken = await createAccesToken({ id: userLogged._id });

    // Lo almaceno en una cookie el token
    res.cookie("token", accessToken);

    // Devolvemos los datos necesarios para el frontend
    res.json({
      id: userLogged._id,
      username: userLogged.username,
      email: userLogged.email,
      createdAt: userLogged.createdAt,
      updatedAt: userLogged.updatedAt,
    });
  } catch (error) {
    // Retornamos un status code en caso de error
    res.status(500).json({ message: error.message });
  }
};

// Creamos una funcion para el LogOut
export const logoutRequest = (req, res) => {
  // Borramos el token que teniamos guardado en las cookies
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
