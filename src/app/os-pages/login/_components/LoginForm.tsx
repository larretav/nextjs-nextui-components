import { Button } from "@heroui/button"
import { Checkbox } from "@heroui/checkbox"
import { Input } from "@heroui/input"
import { Link } from "@heroui/link"
import React from 'react'

export const LoginForm = () => {
  return (
    <div className="flex flex-col gap-6 py-10 px-5 w-full bg-white rounded-3xl shadow-lg md:px-10 text-neutral-800 md:min-w-[500px]">
      <span className="text-3xl text-center">Inicia sesión</span>
      <div className="flex flex-col gap-4">
        <Input label="Usuario" />
        <Input label="Contraseña" />
        <Checkbox defaultSelected>Recuérdame</Checkbox>
      </div>

      <Button color="primary" className="bg-green-600">Iniciar Sesión</Button>

      <div className="flex flex-col">
        <Link href="#" className="text-blue-500">Olvidé mi contraseña</Link>
        <span >¿No tienes una cuenta?, <Link href="/os-pages/register" className="text-blue-500">¡Solicita una!</Link></span>
      </div>
    </div>
  )
}
