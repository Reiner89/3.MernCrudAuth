import { Button } from "@material-tailwind/react";
import { IconEmail, IconKey } from "../Assets/Icons";

export const Login = () => {
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
              <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <div className="relative w-full min-w-[200px] my-5">
                  <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    type="email"
                  />
                  <span className="absolute text-gray-500 text-2xl right-0 top-2 mr-4">
                    <IconEmail />
                  </span>
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Email
                  </label>
                </div>
                <div className="relative w-full min-w-[200px] my-5">
                  <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    type="password"
                  />
                  <span className="absolute text-gray-500 text-2xl right-0 top-2 mr-4">
                    <IconKey />
                  </span>
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Password
                  </label>
                </div>
                <div className="px-4 pb-2 pt-4 my-2">
                  <Button className="relative w-full">Sign In</Button>
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
