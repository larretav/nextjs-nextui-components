'use client';
import React, { createElement, forwardRef, useState } from 'react'
import { Drawer, DrawerBody, DrawerContent } from '../drawer/Drawer'
import { Divider } from "@heroui/divider";
import { AnimatePresence, motion, PanInfo } from 'framer-motion';

type Props = {
  open: boolean,
  onClose: () => void,
  children: React.ReactNode
}

export const BottomSheet = ({ open, onClose, children }: Props) => {

  // const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
  //   const threshold = 100 // Píxeles que el usuario debe arrastrar para cerrar
  //   const movementY = e.clientY - startY;
  //   if (movementY > threshold)
  //     onClose();
  // }

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100 // Píxeles que el usuario debe arrastrar para cerrar
    if (info.offset.y > threshold) {
      onClose();
    }
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
        base: 'rounded-t-3xl h-fit bg-transparent shadow-none',
        body: 'px-1 mt-1',
      }}
    >
      <DrawerContent >
        <motion.div
          className="w-full bg-content1 shadow-small rounded-t-3xl"
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          dragElastic={{ top: 0, bottom: 0.5 }}
          onDragEnd={handleDragEnd}
        >
          <DrawerBody >
            <Divider className=' m-auto h-1 w-14 rounded  ' />
            <div>{children}</div>
          </DrawerBody>
        </motion.div>
      </DrawerContent>
    </Drawer >

  )
}


