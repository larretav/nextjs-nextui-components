'use client';
import React, { useState } from 'react'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from '../drawer/Drawer'
import { Button } from '@nextui-org/button'
import { FaCopy, FaXmark } from 'react-icons/fa6'
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Divider } from '@nextui-org/divider';

type Props = {}

export const BottomSheet = (props: Props) => {

  const [open, setOpen] = useState(false)
  const [startY, setStartY] = useState(0)


  const toggleBottomSheet = (open: boolean) => {
    setOpen(open)
  }

  const handleTouchStart = (event: React.TouchEvent | React.MouseEvent) => {
    const y = 'touches' in event ? event.touches[0].clientY : event.clientY;
    setStartY(y);
  }

  // Función para manejar el movimiento
  const handleTouchMove = (event: React.TouchEvent | React.MouseEvent) => {
    const y = 'touches' in event ? event.touches[0].clientY : event.clientY;

    // Detectar desplazamiento hacia abajo
    if (y - startY > 100) {  // Ajusta el valor para la sensibilidad
      toggleBottomSheet(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-2 rounded-xl bg-default-100">
      <div className="flex gap-5 items-center">
        <Button onPress={() => toggleBottomSheet(true)} >Open Bottom Sheet</Button>
        <Drawer
          anchor="bottom"
          open={open}
          closeButton={<FaXmark />}
          hideCloseButton={true}
          onClose={() => {
            toggleBottomSheet(false)
          }}
          classNames={{ closeButton: 'top-2 right-2', base: 'rounded-t-3xl h-fit', body: 'px-1' }}
        >
          <DrawerContent
            className="p-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
          >
            {
              (onClose) => <>
                <DrawerBody>
                  <Divider className='m-auto h-1 w-16 rounded' />
                  <Listbox
                    aria-label="Más acciones"
                    onAction={(key) => {
                      console.log(key);
                      onClose();
                    }}
                    classNames={{ list: ' [&_li]:bg-default-100 [&_li]:py-3 [&_li]:px-4 [&_li]:rounded-none first:[&_li]:rounded-t-2xl last:[&_li]:rounded-b-2xl [&_li>span]:font-semibold  gap-px' }}

                  >
                    <ListboxItem key="opt-1" endContent={<FaCopy size={16} />} >Opción 1</ListboxItem>
                    <ListboxItem key="opt-2" >Opción 2</ListboxItem>
                    <ListboxItem key="opt-3" >Opción 3</ListboxItem>
                    <ListboxItem key="opt-4" >Opción 4</ListboxItem>
                  </Listbox>
                </DrawerBody>
              </>
            }
          </DrawerContent>
        </Drawer>
      </div>
    </div>

  )
}
