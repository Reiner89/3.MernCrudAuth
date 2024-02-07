import { Router } from "express";

// Importamos las funciones de cada ruta
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../Controllers/TasksController.js";

// Validamos que haya un inicio de sesion
import { authRequired } from "../Middlewares/ValidateToken.js";

const router = Router();

// Ruta para mostrar todos los tasks
router.get("/api/tasks", authRequired, getTasksRequest);

// Ruta para mostrar un solo task
router.get("/api/tasks/:id", authRequired, getTaskRequest);

// Ruta para crear un task
router.post("/api/tasks", authRequired, createTaskRequest);

// Ruta para actualizar un task
router.put("/api/tasks/:id", authRequired, updateTaskRequest);

// Ruta para eliminar un task
router.delete("/api/tasks/:id", authRequired, deleteTaskRequest);

export default router;
