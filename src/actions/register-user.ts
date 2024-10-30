'use server';

import { RegisterFormType, registerUserSchema } from "@/lib";

export const registerUser = async (data: RegisterFormType) => {

  const resp = registerUserSchema.safeParse(data)
  console.log(resp)

}