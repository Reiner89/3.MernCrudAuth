// Importamos el modelo de nuestros tasks
import Tasks from "../Models/taskModel.js";

// Funcion para traer todos los tasks de la BD
export const getTasksRequest = async (req, res) => {
  try {
    // Buscamos en la base de datos todos los task solo con el id del usuario que lo creo, y adicionalmente sus datos de este
    const tasks = await Tasks.find({
      user: req.user.id,
    }).populate("user");

    // Si no hay tasks retornamos un mensaje al usuario
    if (!tasks || tasks.length === 0) {
      return res.status(404).send({ message: "No se encontraron tasks" });
    } else {
      // Retornamos una lista con todos los tasks
      return res.status(200).send({ data: tasks });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

// Funcion para agregar un nuevo task a la BD
export const createTaskRequest = async (req, res) => {
  // Le indicamos los valores que van a recibir del formulario
  var { title, description, date } = req.body;

  try {
    // Le pasamos los datos del req.body a nuestro modelo y el id del usuario que lo esta creando
    const newTask = new Tasks({
      title,
      description,
      date,
      user: req.user.id,
    });

    // Lo guardamos en la bd
    const taksSaved = await newTask.save();

    //  Retornamos una respuesta con el task creado
    res.status(201).json(taksSaved);
  } catch (error) {
    // En caso de error retornamos un status code y el error
    res.status(404).send(error);
  }
};

// Funcion para traer un task de la bd
export const getTaskRequest = async (req, res) => {
  // Traemos el id del parametro de la ruta
  const taskFound = await Tasks.findById(req.params.id).populate("user");

  //  Si no se encuentra el task retorna un mensaje de error
  if (!taskFound)
    return res.status(404).json({
      message: "No se ha encontrado el task",
    });

  // Sino devuelve el task encontrado
  res.status(200).json(taskFound);
};

// Funcion para eliminar un task en especifico de la BD
export const deleteTaskRequest = async (req, res) => {
  // Buscamos el task por su ID
  const taskDeleted = await Tasks.findByIdAndDelete(req.params.id);

  // Si no lo encuentramos enviamos un mensaje de error
  if (!taskDeleted) return res.status(404).json({ message: "Error al borrar" });

  // Devolvemos una respuesta con el task eliminado
  return res.sendStatus(204);
};

// Funcion para actualizar el estado de un task en la BD
export const updateTaskRequest = async (req, res) => {
  try {
    // Buscamos y actualizamos el task pasandole el id y los datos a actualizar
    const taskUpdate = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Si no se actualiza correctamente mandamos un mensaje de error
    if (!taskUpdate) return res.status(404).send("Error al actualizar");

    // Enviamos la tarea actualizada como respuesta
    res.status(200).json(taskUpdate);
  } catch (error) {
    res.status(404).send(error);
  }
};
