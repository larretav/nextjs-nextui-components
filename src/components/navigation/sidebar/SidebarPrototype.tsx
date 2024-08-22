'use client';
import { useUIStore } from '@/store';
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox'
import clsx from 'clsx';
import React from 'react'
import { FaTwitch, FaTwitter } from 'react-icons/fa6';
import { MdClose, MdSpaceDashboard } from 'react-icons/md';
import { HamburguerButton } from '../nav-bar/HamburguerButton';

type Props = {}

export const SidebarPrototype = (props: Props) => {

  const open = true // useUIStore.use.isSideMenuOpen();


  
  return (
    <aside className={clsx(
      "fixed top-0 left-0 z-40 w-72 h-screen transition-transform bg-default-100",
      {
        "-translate-x-full": !open
      }
    )} aria-label="Sidebar">
      <div className="flex flex-row justify-end items-center m-2">
        <HamburguerButton />
      </div>

      <Listbox variant="faded" aria-label="Listbox menu with icons" color="primary" selectedKeys={["new"]}>
        <ListboxSection title="Primary" >
          <ListboxItem

            key="new"
            startContent={<MdSpaceDashboard />}
            // endContent={<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>}

            // className="bg-green-100 text-green-800 px-3 py-2 hover:bg-green-100 font-bold transition-colors"
            classNames={{
              base: clsx(
                "p-2 transition-colors ", {
                "p-2 border-0 bg-green-600/20 text-green-700 data-[hover=true]:bg-green-600/20 data-[hover=true]:text-green-700 dark:text-green-600 border-0 transition-colors": true
              }
              ),
              title: clsx({
                "font-semibold": true
              })
            }}
          >
            New file
          </ListboxItem>
          <ListboxItem
            key="copy"
            endContent={<Badge content="2" size="lg" variant="flat" color="primary" className="mx-3" showOutline={false} ><span className='hidden'></span></Badge>}

          >
            Copy link
          </ListboxItem>
        </ListboxSection>

        <ListboxSection title="Secondary">
          <ListboxItem
            key="edit"
            showDivider
          >
            Edit file
          </ListboxItem>
          <ListboxItem
            key="delete"
            className="text-danger"
            color="danger"
          >
            Delete file
          </ListboxItem>
        </ListboxSection>
      </Listbox>
    </aside>
  )
}
