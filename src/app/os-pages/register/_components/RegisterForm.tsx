'use client';
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import { Select, SelectItem } from '@nextui-org/select'
import React from 'react'


export const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-6 py-10 px-5 w-full bg-white rounded-3xl shadow-lg md:px-10 text-neutral-800 md:min-w-[500px]">

      <span className="text-3xl text-center">Nuevo usuario</span>

      <div className="flex flex-col gap-4">
        <Input label="Nombre completo o Razón social" />

        <Select label="Giro" >
          <SelectItem key="item-1" >Valor 1</SelectItem>
          <SelectItem key="item-2" >Valor 1</SelectItem>
          <SelectItem key="item-3" >Valor 1</SelectItem>
        </Select>

        <Select label="Yo soy">
          <SelectItem key="item-1" >Valor 1</SelectItem>
          <SelectItem key="item-2" >Valor 1</SelectItem>
          <SelectItem key="item-3" >Valor 1</SelectItem>
        </Select>

        <Input label="Correo electrónico" />
        <Input label="Teléfono" />

        <Checkbox defaultSelected>He leído y estoy de acuerdo con el <Link href="#" className="text-blue-500">Aviso de privacidad</Link></Checkbox>
      </div>

      <Button color="primary" className="bg-green-600">Enviar</Button>

      <span >¿Ya tienes una cuenta? <Link href="/os-pages/login" className="text-blue-500">¡Inicia sesión!</Link></span>
    </div>
  )
}