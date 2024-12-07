import { z } from "zod";

export const registerUserSchema = z.object({
  completeName: z.string().min(1, 'Campo requerido'),
  businessLine: z.string().min(1, 'Campo requerido'),
  // email: z.string().min(1, 'Campo requerido'),
  // phone: z.string().min(1, 'Campo requerido'),
  privacyNotice: z.boolean().refine(val => val == true, {message: 'Debes aceptar'}),
});


export type RegisterFormType = z.infer<typeof registerUserSchema>;
