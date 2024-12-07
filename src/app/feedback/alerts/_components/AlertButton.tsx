'use client';
import { showAlert } from '@/lib/alerts-dialog/alertDialog';
import { Button } from '@nextui-org/button'
import React from 'react'

const AlertButton = () => {


  return (
    <div className="flex gap-2 col-span-4">
      
      <Button color='primary' onPress={() => {
        showAlert.success("Hola we")
      }} >Trigger</Button>

      <Button color='secondary' onPress={() => {
        showAlert.info("Segunda alerts", { description: 'Descripción y asi' })
      }}  >Trigger</Button>

    </div>
  )
}

export default AlertButton