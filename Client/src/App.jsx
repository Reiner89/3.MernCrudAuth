import { AuthProvider } from "./Context/Auth/AuthProvider";
import {
  AddTask,
  EditTask,
  HomePage,
  Login,
  Profile,
  Register,
  Tasks,
} from "./Pages/index";
// Importamos BrowserRouter, Route y Routes de react-router-dom para la configuracion de rutas.
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/tasks/:id" element={<EditTask />}></Route>
            <Route path="/addTask" element={<AddTask />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
