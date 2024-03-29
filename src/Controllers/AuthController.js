// Importamos el modelo de nuestro usuario
import User from "../Models/userModel.js";

// Importamos el modulo para encriptar nuestra contraseña
import bcrypt from "bcryptjs";

// Importamos el modulo para generar un token
import { createAccesToken } from "../Libs/JsonWebToken.js";

// Importamos jason-web-token
import jwt from "jsonwebtoken";

// Importamos el token secret
import { TOKEN_SECRET } from "../config.js";

// Funcion para el registro de un nuevo usuario al entrar a la ruta
export const registerRequest = async (req, res) => {
  // Le indicamos los valores que se van a recibir del formulario
  var { email, password, username } = req.body;

  try {
    // Verificamos si el correo electronico ya existe en la base de datos
    const userExistEmail = await User.findOne({ email });

    if (userExistEmail)
      return res.status(400).json(["El correo electronico ya esta en uso"]);

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
      return res.status(400).json(["El usuario no se encuentra registrado."]);
    }

    // Comprobamos la contraseña
    const validPassword = await bcrypt.compare(password, userLogged.password);
    if (!validPassword) {
      return res.status(400).json(["La contraseña es incorrecta."]);
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

// Creamos una funcion del perfil
export const profileRequest = async (req, res) => {
  // Nos aseguramos que el usuario este autenticado
  // console.log(req.user);

  // Una ves que esta autenticado hacemos una busqueda de este en la Bd
  const userFound = await User.findById(req.user.id);

  // Hacemos una validacion
  if (!userFound) return res.status(401).json({ message: "User not found" });

  // Si todo va bien lo enviamos como json
  return res.status(200).json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

// Verificar token
export const verifyTokenRequest = async (req, res) => {
  // De las cookies del navegador obtenemos el token
  const { token } = req.cookies;

  //  Si no hay token retornamos un mensaje al cliente y le damos un status de 401 con un mensaje de No autorizado
  if (!token) return res.status(401).json({ message: "Acceso no Autorizado" });

  // Si hay un token lo verificamos
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    // En caso de error retornamos un mensaje al cliente y status 401
    if (err) return res.status(401).json({ message: "No Autorizado" });

    // Si encontro el token significa que hay un id de un usario, buscamos este usuario en la BD
    const userFound = await User.findById(user.id);

    // Si el usuario no existe retornamos otro mensaje al cliente y status 401
    if (!userFound)
      return res.status(401).json({ message: "Usuario no encontrado" });

    // Si todo sale bien guardamos retornamos los datos del usario
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
