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
    setState({ ...state, [anchor]: open })
  }

  return (
    <div className="p-2 flex items-center justify-center gap-4 bg-default-100 rounded-xl">
      {
        buttonList.slice(0,1).map(item => <div key={item.anchor}>
          <Button key={item.anchor} isIconOnly onClick={() => { toggleDrawer(item.anchor, true) }}> {item.icon} </Button>
          <Drawer anchor={item.anchor} open={state[item.anchor]} onClose={(isOpen) => {
            toggleDrawer(item.anchor, false)
          }}>
            <DrawerContent >
              {
                (onClose) => {
                  return <>
                    <Button color="danger" onPress={onClose} >Close</Button>
                  </>
                }
              }
            </DrawerContent>
          </Drawer>
        </div>)
      }
    </div>
  )
}
