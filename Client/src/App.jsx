/* eslint-disable no-unused-vars */
// Importamos nuestro contexto
import { AuthProvider } from "./Context/Auth/AuthProvider";

// Importamos los componentes que vamos a utilizar en la aplicación
import {
  TaskForm,
  HomePage,
  Login,
  Profile,
  Register,
  TasksHome,
} from "./Pages/index";

// Importamos BrowserRouter, Route y Routes de react-router-dom para la configuracion de rutas.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importamos nuestra funcion que nos ayudara a proteger las rutas
import { ProtectedRoutes } from "./Routes/ProtectedRoutes";
import { TaskProvider } from "./Context/Tasks/TaskContext";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
            <Routes>
              {/* Rutas que no estarán protegidas */}
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>

              {/*  Rutas que estaran protegidas */}
              <Route element={<ProtectedRoutes />}>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/tasks" element={<TasksHome />}></Route>
                <Route path="/tasks/:id" element={<TaskForm />}></Route>
                <Route path="/addtasks" element={<TaskForm />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
    </>
  );
};
