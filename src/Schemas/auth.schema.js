// Importamos z de zod
import { z } from "zod";

// Creamos un schema para validar los datos del formulario del Register
export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es obligatoria",
  }),
  email: z
    .string({
      required_error: "La dirección de correo electrónico es obligatoria",
    })
    .email({
      message:
        "Por favor, introduzca una dirección de correo electrónico válida",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
});

// Creamos un schema para validar los datos del formulario del Login
export const loginSchema = z.object({
  email: z
    .string({
      required_error: "La dirección de correo electrónico es obligatoria",
    })
    .email({
      message: "Introduce una dirección de correo electrónico válida",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
});
