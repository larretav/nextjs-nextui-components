import { z } from "zod";

export const authLoginFormSchema = z.object({
  userName: z.string().min(1, 'Usuario obligatorio'),
  password: z.string().min(1, 'Contraseña obligatoria'),
});

export type AuthLoginFormType = z.infer<typeof authLoginFormSchema>;