'use client';
import React, { useState } from 'react'
import { Drawer, DrawerBody, DrawerContent } from '../drawer/Drawer'
import { Divider } from '@nextui-org/divider';
import { motion } from 'framer-motion';

type Props = {
  open: boolean,
  onClose: () => void,
  children: React.ReactNode
}

export const BottomSheet = ({ open, onClose, children }: Props) => {

  const [startY, setStartY] = useState(0)

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const threshold = 100 // Píxeles que el usuario debe arrastrar para cerrar
    const movementY = e.clientY - startY;
    if (movementY > threshold)
      onClose();
  }

  return (
    <Drawer
      anchor="bottom"
      open={open}
      hideCloseButton={true}
      onClose={() => {
        onClose();
      }}
      classNames={{
        closeButton: 'top-2 right-2',
        base: 'rounded-t-3xl h-fit no-scrollbar',
        body: 'px-1 mt-1'
      }}
    >
      <DrawerContent
        as={motion.aside}
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        onDragEnd={handleDragEnd}
        onDragStart={(e) => { setStartY(e.clientY) }}
      >
        <DrawerBody >
          <Divider className=' m-auto h-1 w-14 rounded  ' />
          <div>{children}</div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

  )
}
