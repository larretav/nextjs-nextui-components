'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authLoginFormSchema, AuthLoginFormType } from "../helpers/auth-login-form.schema";
import { Input } from "@heroui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import clsx from "clsx";
import { Button } from "@/components";

export const AuthLoginForm = () => {

  const [errorList, setErrorList] = useState<string[] | null>()
  const [isPassVisible, setIsPassVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthLoginFormType>({
    resolver: zodResolver(authLoginFormSchema),
  });

  const toggleVisibility = () => setIsPassVisible(!isPassVisible);

  const onSubmit = async (data: AuthLoginFormType, force: boolean = false) => {

    try {

      const formData = new FormData();
      // Object.keys(data).forEach(item => formData.append(item, data[item as keyof typeof data]));

      // const { ok, error, hasActiveSession } = await authenticate(formData, geolocation, force);

      console.log({ data })


      // setErrorList(null);
      // window.location.replace('/dashboard');

    } catch (error: any) {
      setErrorList(Array.isArray(error) ? error : [error]);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit((e) => onSubmit(e, false))} className="flex flex-col gap-6 py-10 px-5 w-full bg-content1 rounded-3xl shadow-lg md:px-10 text-foreground md:w-[500px]">
        <span className="text-3xl text-center">Inicia sesión</span>
        <div className="flex flex-col gap-4">
          <Input
            {...register('userName')}
            variant="flat"
            radius="md"
            label="Usuario"
            isInvalid={!!errors.userName}
            errorMessage={errors.userName?.message}
          />
          <Input
            {...register('password')}
            variant="flat"
            radius="md"
            label="Contraseña"
            type={isPassVisible ? "text" : "password"}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="Cambiar visibilidad de contraseña">
                {
                  isPassVisible
                    ? <FaEye className="text-default-400" />
                    : <FaEyeSlash className="text-default-400" />
                }
              </button>
            }
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button color="blue" type="submit" isLoading={isSubmitting} >Iniciar Sesión</Button>
          <div className={clsx(
            "w-full px-4 py-1 text-small rounded-md bg-danger-50 text-danger font-normal",
            {
              'hidden': !errorList,
            }
          )
          }>
            <ul>
              {
                errorList?.map((err, idx) => <li key={idx}>{err}</li>)
              }
            </ul>
          </div>
        </div>

      </form>
    </>

  )
}
