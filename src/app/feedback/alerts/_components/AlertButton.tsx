'use client';
import { showAlert } from '@/lib/alert-dialog/alert-dialog';
import { Button } from '@nextui-org/button';

const AlertButton = () => {


  return (
    <div className="flex gap-2 col-span-4">

      <Button color="success" onPress={() => {
        showAlert.success("Success Alert", { description: 'Esta es una alerta success' })
      }} >Success</Button>

      <Button color="default" className="bg-sky-500 text-white" onPress={() => {
        showAlert.info("Info Alert", { description: 'Esta es una alerta info' })
      }}  >Info</Button>

      <Button color="warning" onPress={() => {
        showAlert.warning("Warning Alert", { description: 'Esta es una alerta warning' })
      }}  >Info</Button>

      <Button color="danger" onPress={() => {
        showAlert.error("Error Alert", { description: 'Esta es una alerta error' })
      }}  >Info</Button>

      <Button color="secondary" onPress={() => {
        showAlert.question("Question Alert", {
          description: 'Esta es una alerta question',
          footer: (onClose) => {
            return <div className="flex flex-col gap-3">
              <Button variant="bordered" color="danger" onPress={onClose}>Cerrar</Button>
            </div>
          }
        })
      }}  >Info</Button>

    </div>
  )
}

export default AlertButton