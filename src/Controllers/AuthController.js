// Importamos el modelo de nuestro usuario
import User from "../Models/userModel.js";

// Importamos el modulo para encriptar nuestra contraseña
import bcrypt from "bcryptjs";

// Importamos el modulo para generar un token
import jwt from "jsonwebtoken";

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

    // Devolvemos los datos necesarios para el frontend
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
  }
};

// Funcion para el logeo del usuario al entrar a la ruta
export const loginRequest = async (req, res) => {
  res.send("Logeando...");
};
