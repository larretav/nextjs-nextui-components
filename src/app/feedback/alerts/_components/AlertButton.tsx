'use client';
import { alert } from '@/components/feedback/CustomAlert';
import { useAlert } from '@/lib/alerts-dialog/alertDialog';
import { Button } from '@nextui-org/button'
import React from 'react'

const AlertButton = () => {

  const { showAlert } = useAlert();

  return (
    <div className="flex gap-2 col-span-4">
      
      <Button color='primary' onPress={() => {
        showAlert("Hola we", { severity: 'success', description: 'Descripción' })
      }} >Trigger</Button>

      <Button color='secondary' onPress={() => {
        showAlert("Segunda alerts", { severity: 'info', description: 'Descripción' })
      }}  >Trigger</Button>

    </div>
  )
}

export default AlertButton