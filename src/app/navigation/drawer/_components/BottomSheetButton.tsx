'use client';
import { BottomSheet } from '@/components'
import { Button } from '@nextui-org/button'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEllipsisVertical, FaCopy, FaImage } from 'react-icons/fa6'
import { TbLayoutNavbarFilled } from 'react-icons/tb';

const BottomSheetButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center p-2 rounded-xl bg-default-100">

      <Button
        color="success"
        onClick={() => setOpen(true)}
        endContent={<TbLayoutNavbarFilled className="rotate-180" />}
      >
        Open Bottom Sheet
      </Button>
      <BottomSheet open={open} onClose={() => setOpen(false)} >
        <Listbox
          aria-label="Más acciones"
          onAction={(key) => {
            console.log(key);
            setOpen(false);
          }}
          classNames={{ list: '[&_li]:bg-default-100 [&_li]:py-3 [&_li]:px-4 [&_li]:rounded-none first:[&_li]:rounded-t-2xl last:[&_li]:rounded-b-2xl [&_li>span]:font-semibold gap-px' }}

        >
          <ListboxItem key="opt-1" endContent={<FaCopy size={20} />} >Opción 1</ListboxItem>
          <ListboxItem key="opt-2" endContent={<FaImage size={20} />} >Opción 2</ListboxItem>
          <ListboxItem key="opt-3" endContent={<FaImage size={20} />} >Opción 3</ListboxItem>
          <ListboxItem key="delete" endContent={<FaTrashAlt size={20} className="text-danger" />} className="text-danger [&_svg]:data-[hover=true]:text-white" color='danger' >Opción 4</ListboxItem>
        </Listbox>
      </BottomSheet>
    </div>
  )
}

export default BottomSheetButton