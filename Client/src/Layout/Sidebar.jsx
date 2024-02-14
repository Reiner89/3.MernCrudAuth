// Importamos los componentes a usar de material tailwind
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

// Importamos los iconos
import {
  IconDashboard,
  IconHome,
  IconLogOut,
  IconSignIn,
  IconUser,
} from "../Assets/Icons";

// Importo mi contexto
import { useAuth } from "../Context/Auth/AuthProvider";

// Importamos Link de react-router-dom
import { Link } from "react-router-dom";

export function Sidebar({ children }) {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <>
      <div className="flex w-full bg-[rgb(240,242,245)]">
        <div className="h-[100vh] w-full max-w-[22rem] flex items-center justify-center">
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              {/* Si el usuario esta autenticado muestro su nombre, si no solo Bienvenido */}
              {isAuthenticated ? (
                <>
                  <Typography variant="h5" color="blue-gray">
                    Bienvenido {user.username}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h5" color="blue-gray">
                    Bienvenido a TailAdmin
                  </Typography>
                </>
              )}
            </div>

            {/*  Si estoy autentificado muestro estas opciones */}
            {isAuthenticated ? (
              <>
                <List>
                  <Link to="/">
                    <ListItem>
                      <ListItemPrefix>
                        <IconHome />
                      </ListItemPrefix>
                      Home Page
                    </ListItem>
                  </Link>
                  <Link to="/tasks">
                    <ListItem>
                      <ListItemPrefix>
                        <IconDashboard />
                      </ListItemPrefix>
                      Tasks
                    </ListItem>
                  </Link>
                  <Link to={"/profile"}>
                    <ListItem>
                      <ListItemPrefix>
                        <IconUser />
                      </ListItemPrefix>
                      Profile
                    </ListItem>
                  </Link>
                  <Link to={"/"}>
                    <ListItem onClick={() => logout()}>
                      <ListItemPrefix>
                        <IconLogOut />
                      </ListItemPrefix>
                      Log Out
                    </ListItem>
                  </Link>
                </List>
              </>
            ) : (
              <>
                <List>
                  <Link to="/">
                    <ListItem>
                      <ListItemPrefix>
                        <IconHome />
                      </ListItemPrefix>
                      Home Page
                    </ListItem>
                  </Link>
                  <Link to={"/login"}>
                    <ListItem>
                      <ListItemPrefix>
                        <IconSignIn />
                      </ListItemPrefix>
                      Login
                    </ListItem>
                  </Link>
                  <Link to={"/register"}>
                    <ListItem>
                      <ListItemPrefix>
                        <IconUser />
                      </ListItemPrefix>
                      Register
                    </ListItem>
                  </Link>
                </List>
              </>
            )}
          </Card>
        </div>
        <div className="w-full h-[100vh] pl-[24px] p-[24px] overflow-auto overflow-y-scroll">
          <div className="relative w-full pl-6">{children}</div>
        </div>
      </div>
    </>
  );
}
