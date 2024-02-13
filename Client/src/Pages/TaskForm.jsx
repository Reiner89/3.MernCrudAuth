import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { IconClose } from "../Assets/Icons";
import {
  styleInput,
  styleLabel,
  styleTextArea,
  styleTextAreaLabel,
} from "./Components/estilosGenerales";
import { useTask } from "../Context/Tasks/TaskContext";

export const TaskForm = () => {
  // Usamos nuestro contexto
  const { createTask } = useTask();

  // Estado para almacenar el modal y el formulario de tareas
  const [open, setOpen] = useState(false);

  // Estado para el furmalio del task nuevo
  const [formData, setFormData] = useState({ title: "", description: "" });

  // Función para abrir/cerrar el modal
  const handleOpen = () => {
    setOpen(!open);
  };

  // Función para manejar el cambio en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    // Evitamos que se envíe el formulario por defecto
    e.preventDefault();

    // Mostramos el formulario en consola
    createTask(formData);

    // Por ultimo limpiamos el formulario
    setFormData({ title: "", description: "" });
  };

  return (
    <>
      <Button onClick={handleOpen}>Add Task</Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Agregar Nuevo Task
            </Typography>
          </DialogHeader>
          <IconClose onClick={handleOpen} />
        </div>
        <DialogBody>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Título de la Tarea:
            </Typography>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={styleInput}
                  placeholder=" "
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <label htmlFor="title" className={styleLabel}>
                  Título
                </label>
              </div>
              <div className="w-full">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    className={styleTextArea}
                    name="description"
                    id="description"
                    placeholder=" "
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  <label htmlFor="description" className={styleTextAreaLabel}>
                    Descripción
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="py-6">
            <button
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleSubmit}
            >
              Add New Task
            </button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};
