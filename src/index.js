// Importamos nuestra app y el puerto donde arrancara nuestra aplicacion
import { app, port } from "./app.js";
// Importamos nuestra coneccion
import { connectDB } from "./db.js";

connectDB()
app.listen(port);
console.log(`Servidor ejecutandose en http://localhost:${port}/`);
