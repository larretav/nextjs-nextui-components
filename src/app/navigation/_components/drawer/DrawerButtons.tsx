'use client';

import { Button } from '@nextui-org/button'
import React from 'react'

import { TbLayoutSidebarFilled, TbLayoutSidebarRightFilled, TbLayoutNavbarFilled   } from "react-icons/tb";


export const DrawerButtons = () => {

  const buttonList = [
    {
      anchor: 'left',
      icon: <TbLayoutSidebarFilled />
    },
    {
      anchor: 'right',
      icon: <TbLayoutSidebarRightFilled  />
    },
    {
      anchor: 'top',
      icon: <TbLayoutNavbarFilled  />
    },
    {
      anchor: 'bottom',
      icon: <TbLayoutNavbarFilled className="rotate-180"  />
    },
  ]


  return (
    <div className="p-2 flex items-center justify-center gap-4 bg-default-100 rounded-xl">
      {
        buttonList.map(item => <Button key={item.anchor} isIconOnly onClick={()=> {console.log(item.anchor)}}> {item.icon} </Button>)
      }
    </div>
  )
}
