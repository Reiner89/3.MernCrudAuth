import { useAuth } from "../Context/Auth/AuthProvider";

export const TasksHome = () => {
  // De nuestro contexto extraemos el usuario
  const { user } = useAuth();

  return <div>Lista de Task</div>;
};
