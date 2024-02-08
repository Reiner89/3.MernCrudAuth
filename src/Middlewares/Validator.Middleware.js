// Crearemos una funcion para ejecutar la validacion de los schema creados
export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
