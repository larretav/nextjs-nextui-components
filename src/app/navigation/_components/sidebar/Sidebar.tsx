'use client';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox'
import React from 'react'

type Props = {}

export const Sidebar = (props: Props) => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-100" aria-label="Sidebar">
      <Listbox variant="faded" aria-label="Listbox menu with icons">
        <ListboxSection title="Primary">
          <ListboxItem
            
            key="new"
            className="bg-green-100  text-green-800 px-3 py-2 hover:bg-green-100 font-bold"
          >
            New file
          </ListboxItem>
          <ListboxItem
            key="copy"
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
