import { useAuth } from "../Context/Auth/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { loading, isAuthenticated } = useAuth();

  // Mostramos en consola ambos estados
  console.log("Loading: ", loading, "Esta autenticado?: ", isAuthenticated);

  // Si esta cargando, mostramos un loading
  if (loading) return <div>Cargando...</div>;

  // Si el usuario no está autenticado y no esta cargando, lo redirige a la página de inicio de sesión y un replace para que no se pueda volver atrás.
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;

  // Si el usuario esta autenticado lo dejo pasar
  return <Outlet />;
};
