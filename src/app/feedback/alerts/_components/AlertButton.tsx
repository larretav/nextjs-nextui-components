'use client';
import { alert } from '@/components/feedback/CustomAlert';
import { useAlert } from '@/lib/alerts-dialog/alertDialog';
import { Button } from '@nextui-org/button'
import React from 'react'

const AlertButton = () => {

  const alertDialog = useAlert();

  const handleOpen = () => {
    // alert.success("Hola we", { description: 'Esta es una descripcion', })
    alertDialog.showAlert("Hola we", { severity: 'success', description: 'Descripción' })
  }

  return (
    <div className="flex flex-col col-span-4">
      <Button onPress={handleOpen} >Trigger</Button>
    </div>
  )
}

export default AlertButton