import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import React from 'react'

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <div className="w-full flex flex-col px-5 py-10 gap-5 bg-white shadow-lg rounded-2xl md:px-10 md:min-w-[500px] text-neutral-800">
      <span className="text-3xl text-center ">Inicia sesión</span>
      <Input label="Usuario" />
      <Input label="Contraseña" />

      <Checkbox defaultSelected>Recuérdame</Checkbox>

      <Button color="primary" >Iniciar Sesión</Button>

      <div className="flex flex-col ">
        <Link href="#" className="text-blue-500">Olvidé mi contraseña</Link>
        <span >¿No tienes una cuenta?, <Link href="#" className="text-blue-500">¡Solicita una!</Link></span>
      </div>
    </div>
  )
}

export default LoginForm