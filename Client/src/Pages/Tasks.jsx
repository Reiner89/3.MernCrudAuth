import { useEffect } from "react";
import { useTask } from "../Context/Tasks/TaskContext";
import { Sidebar } from "../Layout/Sidebar";
import { CardTask } from "./Components/CardTask";
import { TaskForm } from "./TaskForm";

export const TasksHome = () => {
  // Hacemos uso de nuestro contexto
  const { tasks, getTasks } = useTask();

  const fetchData = async () => {
    await getTasks();
  };

  // Cargamos las tareas ni bien se monta el componente
  useEffect(() => {
    fetchData();
  }, [tasks]);

  return (
    <Sidebar
      children={
        <>
          
              <div className="relative flex flex-col bg-[rgb(255,255,255)] rounded-xl">
                <div className="relative px-4 pt-4 flex justify-between items-center">
                  <h6 className="relative text-[1rem] leading-[1.625] tracking-[0.0075em] font-semibold">
                    Agregar un Nueva Tarea
                  </h6>
                  <TaskForm />
                </div>
                <div className="relative p-4">
                  {tasks.map((task) => (
                    <CardTask
                      titulo={task.title}
                      descripcion={task.description}
                      user={task.user.username}
                      fecha={task.user.updatedAt}
                      key={task._id}
                    />
                  ))}
                </div>
              </div>

        </>
      }
    />
  );
};
