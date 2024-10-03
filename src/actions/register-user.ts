'use server';

import { RegisterFormType, registerUserSchema } from "@/lib";

export const registerUser = (data: RegisterFormType) => {

  const resp = registerUserSchema.safeParse(data)
  // console.log(resp)
  
}