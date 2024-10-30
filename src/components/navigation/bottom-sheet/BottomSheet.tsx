import React, { useState } from 'react'
import { Drawer, DrawerContent } from '../drawer/Drawer'
import { Button } from '@nextui-org/button'
import { FaXmark } from 'react-icons/fa6'

type Props = {}

export const BottomSheet = (props: Props) => {

  const [open, setOpen] = useState(false)

  const toggleBottomSheet = (open: boolean) => {
    setOpen(!open)
  }

  return (
    <>
      <Button>Open Bottom Sheet</Button>
      <Drawer
        anchor="bottom"
        open={open}
        closeButton={<FaXmark />}
        hideCloseButton={false}
        onClose={() => {
          toggleBottomSheet(false)
        }}>
        <DrawerContent className="p-2 pt-12">
          {
            (onClose) => <>
              <Button color="danger" onPress={onClose}>Cerrar</Button>
            </>
          }
        </DrawerContent>
      </Drawer>
    </>

  )
}
