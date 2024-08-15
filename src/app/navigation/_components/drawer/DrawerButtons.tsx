'use client';

import { Drawer } from '@/components';
import { DrawerContent } from '@/components/navigation/drawer/Drawer';
import { Button } from '@nextui-org/button'
import React, { useState } from 'react'

import { TbLayoutSidebarFilled, TbLayoutSidebarRightFilled, TbLayoutNavbarFilled } from "react-icons/tb";


export const DrawerButtons = () => {

  const [state, setState] = useState<Record<string, any>>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const buttonList: Record<string, any>[] = [
    {
      anchor: 'left',
      icon: <TbLayoutSidebarFilled />
    },
    {
      anchor: 'right',
      icon: <TbLayoutSidebarRightFilled />
    },
    {
      anchor: 'top',
      icon: <TbLayoutNavbarFilled />
    },
    {
      anchor: 'bottom',
      icon: <TbLayoutNavbarFilled className="rotate-180" />
    },
  ]

  const toggleDrawer = (anchor: string, open: boolean) => {
    console.log({ anchor, open })
    setState({ ...state, [anchor]: open })
  }

  console.log({ state })
  return (
    <div className="p-2 flex items-center justify-center gap-4 bg-default-100 rounded-xl">
      {
        buttonList.map(item => <div key={item.anchor}>
          <Button key={item.anchor} isIconOnly onClick={() => { toggleDrawer(item.anchor, true) }}> {item.icon} </Button>
          <Drawer anchor={item.anchor} open={state[item.anchor]} onClose={(isOpen) => {
            toggleDrawer(item.anchor, isOpen)
          }}>
            <DrawerContent >
              Modal y asi
            </DrawerContent>
          </Drawer>
        </div>)
      }
    </div>
  )
}
