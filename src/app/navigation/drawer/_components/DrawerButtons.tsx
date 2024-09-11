'use client';

import { Drawer } from '@/components';
import { DrawerContent } from '@/components/navigation/drawer/Drawer';
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input';
import React, { useMemo, useState } from 'react'
import { BsPerson } from 'react-icons/bs';
import { FaChevronLeft, FaXmark } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

import { TbLayoutSidebarFilled, TbLayoutSidebarRightFilled, TbLayoutNavbarFilled } from "react-icons/tb";


export const DrawerButtons = () => {

  const [anchors, setAnchors] = useState<Record<string, any>>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const [pressData, setPressData] = useState([JSON.stringify(anchors)])
  const [rightSidebar, setRightSidebar] = useState(false)

  const buttonList: Record<string, any>[] = useMemo(() => ([
    {
      anchor: 'left',
      icon: <TbLayoutSidebarFilled />
    },
    {
      anchor: 'top',
      icon: <TbLayoutNavbarFilled />
    },
    {
      anchor: 'right',
      icon: <TbLayoutSidebarRightFilled />
    },
    {
      anchor: 'bottom',
      icon: <TbLayoutNavbarFilled className="rotate-180" />
    },
  ]), [])

  const toggleDrawer = (anchor: string, open: boolean) => {
    setAnchors({ ...anchors, [anchor]: open })
  }

  return (
    <div className="p-2 flex flex-col items-center justify-center gap-4 bg-default-100 rounded-xl">
      <div className="flex gap-5 items-center">
        {
          buttonList.map(item => <div key={item.anchor}>
            <Button key={item.anchor} isIconOnly onPress={(e) => {
              toggleDrawer(item.anchor, true);
              setPressData([...pressData, JSON.stringify({ ...anchors, [item.anchor]: true })]);
            }}> {item.icon} </Button>
            <Drawer
              anchor={item.anchor}
              open={anchors[item.anchor]}
              closeButton={<FaXmark />}
              hideCloseButton={false}
              onClose={() => {
                toggleDrawer(item.anchor, false)
              }}>
              <DrawerContent className="p-2 pt-12">
                {
                  (onClose) => <>
                    <Button color="danger" onPress={onClose}>Cerrar</Button>
                  </>
                }
              </DrawerContent>
            </Drawer>
          </div>)
        }

      </div>
      {/* <div>
        {pressData.map(item => <p key={item}>{item}</p>)}
      </div> */}
    </div>
  )
}
