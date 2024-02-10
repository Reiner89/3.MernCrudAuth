import { Alert } from "@material-tailwind/react";

// Creamremos una funcion para alertas donde pasaremos como prop el texto de la alerta, y el color y el icono
export const Alerts = ({
  textAlert,
  colorAlert,
  borderAlert,
  backgroundAlert,
  iconAlert,
  openAlert,
}) => {
  return (
    <>
      <div className="relative my-2">
        <Alert
          icon={iconAlert}
          open={openAlert}
          className={`rounded-none border-l-4 ${colorAlert} font-medium`}
        >
          {textAlert}
        </Alert>
      </div>
    </>
  );
};
