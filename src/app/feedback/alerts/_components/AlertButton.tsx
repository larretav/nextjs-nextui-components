'use client';
import { showAlert } from '@/lib/alert-dialog/alert-dialog';
import { sleep } from '@/lib/utils';
import { Button } from '@nextui-org/button';

const AlertButton = () => {


  return (
    <div className="gap-2 col-span-4 flex-wrap grid grid-cols-3 lg:grid-cols-4 ">

      <Button fullWidth color="success" onPress={() => {
        showAlert.success("Success Alert", { description: 'Esta es una alerta success' })
      }} >Success</Button>

      <Button fullWidth color="default" className="bg-sky-500 text-white" onPress={() => {
        showAlert.info("Info Alert", { description: 'Esta es una alerta info' })
      }}  >Info</Button>

      <Button fullWidth color="warning" onPress={() => {
        showAlert.warning("Warning Alert", { description: 'Esta es una alerta warning' })
      }}  >Info</Button>

      <Button fullWidth color="danger" onPress={() => {
        showAlert.error("Error Alert", { description: 'Esta es una alerta error' })
      }}>Info</Button>

      <Button fullWidth color="secondary" onPress={async () => {

        const { isConfirmed } = await showAlert.question("Question Alert", {
          description: 'Estas seguro we?',
        });

        if (isConfirmed)
          showAlert.success('Exitoso');

        if (!isConfirmed)
          showAlert.error('Cancelado', {description: 'Proceso cancelado'});


      }}>Question</Button>

      <Button className='text-white bg-pink-600'>Hola</Button>
    </div>
  )
}

export default AlertButton