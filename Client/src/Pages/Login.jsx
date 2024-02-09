/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import { IconEmail, IconKey } from "../Assets/Icons";
import { InputsStyle } from "./Components/InputsStyle";
import { useState } from "react";
import { useAuth } from "../Context/Auth/AuthProvider";

export const Login = () => {
  // Estado para el formulario de Login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Importamos la funcion de login de nuestro Contexto
  const { login, errorsRegister } = useAuth();

  // Funcion para enviar el formulario
  const handleSubmit = async (e) => {
    //  Evitamos que se envíen los datos al recargar la pagina
    e.preventDefault();

    // Le mandamos los datos del formulario a nuestra funcion
    login(formData);

    // Por ultimo limpiamos el formulario
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div>
        <section className="min-h-screen flex items-stretch text-white ">
          <div className="fondo-form lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
            <div className="absolute bg-black opacity-50 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
              <h1 className="text-4xl font-bold text-left tracking-wide">
                Bienvenido a TailAdmin
              </h1>
              <p className="my-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti voluptatibus quia sit neque mollitia nobis ex
                necessitatibus quis, dolores suscipit et recusandae obcaecati
                voluptas beatae dolorum? Ipsa laborum velit nemo?
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
            <div className="w-full py-6 z-20">
              <h1 className="my-6 text-black text-4xl font-bold">
                Iniciar Sesión
              </h1>
              {errorsRegister.map((error, index) => (
                <div key={index} className="relative bg-red-500 p-2 my-3">
                  {error}
                </div>
              ))}
              <form
                onSubmit={handleSubmit}
                className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              >
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
                  <Button type="submit" className="relative w-full">
                    Sign In
                  </Button>
                </div>
                <div className="flex w-full justify-between my-3">
                  <div className="">
                    <p className="relative text-black cursor-pointer text-xs">
                      Forgot password?
                    </p>
                  </div>
                  <div className="">
                    <p className="relative text-black cursor-pointer text-xs">
                      Don't have an account? Sign Up
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
