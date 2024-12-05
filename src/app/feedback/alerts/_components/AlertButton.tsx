'use client';
import { alert } from '@/components/feedback/CustomAlert';
import { Button } from '@nextui-org/button'
import React from 'react'

const AlertButton = () => {

  const handleOpen = () => {
    alert.success("Hola we", { description: 'Esta es una descripcion', })
  }

  return (
    <div className="flex flex-col col-span-4">
      <Button onPress={handleOpen} >Trigger</Button>
    </div>
  )
}

export default AlertButton