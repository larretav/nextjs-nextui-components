'use client';
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import { Select, SelectItem } from '@nextui-org/select'
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormType, registerUserSchema } from '@/lib/schemas/register-user.schema';
import { registerUser } from '@/actions/register-user';

export const RegisterFormTest = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({
    resolver: zodResolver(registerUserSchema)
  })

  const onSubmit = async (data: RegisterFormType) => {
    try {
      await registerUser(data)
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 py-10 px-5 w-full bg-white rounded-3xl shadow-lg md:px-10 text-neutral-800 md:min-w-[500px] light">

      <span className="text-3xl text-center">Nuevo usuario</span>

      <div className="flex flex-col gap-4">
        <Input
          {...register('completeName')}
          size="sm"
          label="Nombre completo o Razón social"
          isInvalid={!!errors.completeName}
          errorMessage={errors.completeName?.message}
        />

        <Select
          {...register('businessLine')}
          size="sm"
          label="Giro"
          isInvalid={!!errors.businessLine}
          errorMessage={errors.businessLine?.message}
        >
          <SelectItem key="item-1" >Valor 1</SelectItem>
          <SelectItem key="item-2" >Valor 1</SelectItem>
          <SelectItem key="item-3" >Valor 1</SelectItem>
        </Select>

        <Input
          {...register('email')}
          size="sm"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          label="Correo electrónico"
        />
        <Input
          {...register('phone')}
          size="sm"
          isInvalid={!!errors.phone}
          errorMessage={errors.phone?.message}
          label="Teléfono"
        />

        <div>
          <Checkbox
            {...register('privacyNotice')}
            isInvalid={!!errors.privacyNotice}
          >He leído y estoy de acuerdo con el <Link href="#" className="text-blue-500">Aviso de privacidad</Link></Checkbox>
          {!!errors.privacyNotice && <span className="text-tiny text-danger">{errors.privacyNotice.message}</span>}
        </div>
      </div>

      <Button color="primary" className="bg-green-600" type="submit">Enviar</Button>

      <span >¿Ya tienes una cuenta? <Link href="/os-pages/login" className="text-blue-500">¡Inicia sesión!</Link></span>
    </form>
  )
}