import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../../Api/Tasks";

// Creamos nuestro contexto para los tasks
export const TaskContext = createContext();

// Creamos la funcion para el uso de nuestro contexto
export const useTask = () => {
  // Leemos nuestro contexto con useContext
  const context = useContext(TaskContext);

  //  Si no hay un contexto retornamos un error
  if (!context) throw new Error("useTask must be used within the TaskProvider");

  // Si no retornamos el valor del contexto
  return context;
};

//  Proporcionamos las funciones que queremos compartir en todo el proyecto
export const TaskProvider = ({ children }) => {
  // Estado para guardar todos los tasks
  const [tasks, setTasks] = useState([]);

  // Creamos la funcion async para traer todos los tasks
  const getTasks = async () => {
    try {
      // Llamamos a la api y esperamos por la respuesta
      const response = await getTasksRequest();

      // Guardamos los tasks en el estado
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Creamos la funcion async para crear un task
  const createTask = async (newTask) => {
    try {
      // Almacenamos la nueva task en nuestra funcion request
      const response = await createTaskRequest(newTask);

      // Mostramos en consola la respuesta del servidor
      console.log(response);
    } catch (error) {
      // Mostramos el error en consola
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider value={{ createTask, tasks, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
