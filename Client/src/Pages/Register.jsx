/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Button, Alert } from "@material-tailwind/react";
import { IconAlert, IconEmail, IconKey, IconUser } from "../Assets/Icons";
import { InputsStyle } from "./Components/InputsStyle";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // Usamos el contexto de autenticación para acceder a los valores y métodos.
  const { signUp, isAuthenticated, errorsRegister } = useAuth();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Estado para almacenar la aparicion/desaparicion de la alerta
  const [alert, setAlert] = useState(true);

  // Instanciamos la función navigate() que nos permite navegar por las rutas.
  const navigate = useNavigate();

  // Si el usuario esta autenticado que lo dirija a la pagina principal
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  // Funcion para cargar el formulario
  const handleSubmit = async (e) => {
    // Evitamos que se recargue la pagina al enviar el formulario
    e.preventDefault();

    // Le mandamos los datos del formulario a nuestra funcion
    signUp(formData);

    // Por ultimo limpiamos el formulario
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="relative">
      <section className="min-h-screen flex items-stretch text-white ">
        <div className="fondo-form lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
          <div className="w-full px-24 z-10">
            <h1 className="text-4xl font-bold text-left tracking-wide">
              Bienvenido a TailAdmin
            </h1>
            <p className="my-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              voluptatibus quia sit neque mollitia nobis ex necessitatibus quis,
              dolores suscipit et recusandae obcaecati voluptas beatae dolorum?
              Ipsa laborum velit nemo?
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div className="w-full py-6 z-20">
            <h1 className="my-6 text-black text-4xl font-bold">Registrate</h1>
            {errorsRegister.map((error, index) => (
              <div key={index}>
                <Alert
                  className="rounded-none border-l-4 border-[#ef4444] bg-[#ef4444]/10 font-medium text-[#ef4444]"
                  open={alert}
                  icon={<IconAlert />}
                >
                  {error}
                </Alert>
              </div>
            ))}
            <form
              onSubmit={handleSubmit}
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              {/* Input del UserName */}
              <InputsStyle
                type={"text"}
                name={"username"}
                id={"username"}
                icon={<IconUser />}
                text={"UserName"}
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />

              {/* Input del Email */}
              <InputsStyle
                type={"email"}
                name={"email"}
                id={"email"}
                icon={<IconEmail />}
                text={"Correo Electronico"}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              {/* Input del Password */}
              <InputsStyle
                type={"password"}
                name={"password"}
                id={"password"}
                icon={<IconKey />}
                text={"Contraseña"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <div className="px-4 pb-2 pt-4 my-2">
                <Button
                  type="submit"
                  className="relative w-full"
                  onClick={() => setAlert(true)}
                >
                  Registrarse
                </Button>
              </div>
              <div className="flex w-full justify-between my-3">
                <div className="">
                  <p className="relative text-black cursor-pointer text-xs">
                    ¿Ya tienes una cuenta? Inicia Sesión
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
