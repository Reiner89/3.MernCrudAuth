import axios from "./AxiosConfiguration";

// Funcion para traer todos los tasks
export const getTasksRequest = async () => {
  // Guardamos la respuesta de la peticion en la variable responsee
  const response = await axios.get("/tasks");

  // Retornamos el resultado de la peticion
  return response;
};

// Funcion para traer un task por su id
export const getTaskByIdRequest = async (id) => {
  // Enviamos una peticion y guardamos la respuesta en response
  const response = await axios.get(`/task/${id}`);

  // Retornamos el dato del task encontrado
  return response;
};

// Funcion para crear un task
export const createTaskRequest = async (task) => {
  // Guardamos la respuesta de la peticion en la variable response
  const response = await axios.post("/tasks", task);

  // Retornamos el resultado de la peticion
  return response;
};

// Funcion para actualizar un task
export const updateTaskRequest = async (task) => {
  // Guardamos la respuesta de la peticion en la variable response
  const res = await axios.put(`/tasks/${task._id}`, task);

  // Retornamos el resultado de la peticion
  return res;
};

// Funcion para borrar un task
export const deleteTaskRequest = async (id) => {
  // Guardamos la respuesta de la peticion en la variable response
  const res = await axios.delete(`/tasks/${id}`);

  //  Retornamos el resultado de la peticion
  return res;
};
