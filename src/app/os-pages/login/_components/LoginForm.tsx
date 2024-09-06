import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import React from 'react'

export const LoginForm = () => {
  return (
    <div className="w-full flex flex-col px-5 py-10 gap-6 bg-white shadow-lg rounded-3xl md:px-10 md:min-w-[500px] text-neutral-800">
      <span className="text-3xl text-center ">Inicia sesión</span>
      <div className="flex flex-col gap-4">
        <Input label="Usuario" />
        <Input label="Contraseña" />
        <Checkbox defaultSelected>Recuérdame</Checkbox>
      </div>

      <Button color="primary" className="bg-green-600">Iniciar Sesión</Button>

      <div className="flex flex-col ">
        <Link href="#" className="text-blue-500">Olvidé mi contraseña</Link>
        <span >¿No tienes una cuenta?, <Link href="/os-pages/register" className="text-blue-500">¡Solicita una!</Link></span>
      </div>
    </div>
  )
}
