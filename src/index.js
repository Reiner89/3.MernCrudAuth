// Importamos nuestra app y el puerto donde arrancara nuestra aplicacion
import { app, port } from "./app.js";
// Importamos nuestra coneccion
import { connectDB } from "./db.js";

// Ejecuto la funcion de mi coneccion
connectDB();

// Le indico mando el puerto que escuchara
app.listen(port);
console.log(`Servidor ejecutandose en http://localhost:${port}`);
