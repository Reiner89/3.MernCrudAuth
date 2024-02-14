import { Button } from "@material-tailwind/react";
import { IconDelete, IconEdit, IconSecurity } from "../../Assets/Icons";

export const CardTask = ({ titulo, descripcion, user, fecha }) => {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex my-2">
        <div className="h-48 lg:h-auto lg:w-[14%] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="border-r border-b border-l border-gray-400 lg:w-[86%] lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <IconSecurity />
              Sólo Miembros
            </p>
            <div className="relative flex justify-between">
              <h1 className="text-gray-900 font-bold text-xl mb-2">{titulo}</h1>
              <div className="relative flex">
                <div className="relative mr-2">
                  <Button variant="text" className="flex items-center gap-2">
                    Edit
                    <IconEdit />
                  </Button>
                </div>
                <Button variant="text" color="red" className="flex items-center gap-2">
                  Delete
                  <IconDelete />
                </Button>
              </div>
            </div>
            <p className="text-gray-700 text-base">{descripcion}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{user}</p>
              <p className="text-gray-600">
                {new Date(fecha).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
