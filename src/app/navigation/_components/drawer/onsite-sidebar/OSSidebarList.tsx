'use client';
import useDebounce from '@/hooks/useDebounce';
import { Input } from '@nextui-org/input'
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

type Props = {}


type SidebarOption = {
  sectionTitle: string;
  items: {
    key: string
    label: string
    isActive: boolean
  }[]
}

const OSSidebarList = (props: Props) => {


  const sidebarItemsInit: SidebarOption[] = [
    {
      sectionTitle: "Seccion 1",
      items: [
        {
          key: "dash",
          label: "Dashboard",
          isActive: false
        },
        {
          key: "quotation",
          label: "Cotizar",
          isActive: false
        },
      ]
    },
    {
      sectionTitle: "Seccion 2",
      items: [
        {
          key: "new",
          label: "New file",
          isActive: false
        },
        {
          key: "copy",
          label: "Copy link",
          isActive: false
        },
        {
          key: "edit",
          label: "Edit file",
          isActive: false
        },
      ]
    },
    {
      sectionTitle: "Seccion 3",
      items: [
        {
          key: "new",
          label: "New file",
          isActive: false
        },
        {
          key: "copy",
          label: "Copy link",
          isActive: false
        },
        {
          key: "edit",
          label: "Edit file",
          isActive: false
        },
      ]
    },
  ]


  const [sidebarItems, setSidebarItems] = useState(sidebarItemsInit);
  const [inputSearch, setInputSearch] = useState("")
  const debounceValue = useDebounce(inputSearch, 500);

  const handleChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => setInputSearch(e.target.value)

  const handleSearch = () => {

    const term = debounceValue;

    if (!term || !term.trim())
      setSidebarItems([...sidebarItemsInit]);

    const result = sidebarItemsInit.map(section => {
      const itemsFiltered = section.items.filter(item => item.label.toLowerCase().includes(term.toLowerCase()));
      return itemsFiltered.length > 0 ? { ...section, items: itemsFiltered } : null;
    }).filter(section => section != null)

    setSidebarItems([...result])
  }

  useEffect(() => {
    handleSearch()
  }, [debounceValue])


  return (
    <>
      <p>{debounceValue}</p>
      <Input
        startContent={<FaMagnifyingGlass color="grey" size={20} />}
        placeholder="Buscar..."
        value={inputSearch}
        onChange={handleChangeInputSearch}
      />

      <Listbox
        items={sidebarItems}
        aria-label="Sidebar items"
        onAction={(key) => console.log(key)}

      >
        {({ items, sectionTitle }) => (
          <ListboxSection key={sectionTitle} title={sectionTitle} items={items} classNames={{ group: "flex flex-col gap-1" }}>
            {
              (item) => <ListboxItem
                key={item.key}
                classNames={{
                  base: clsx(
                    "py-2 px-4 transition-colors", {
                    "border-0 bg-green-600/20 text-green-700 data-[hover=true]:bg-green-600/30 data-[hover=true]:text-green-700 dark:text-green-600 border-0 transition-colors": item.isActive
                  }),
                  title: clsx({
                    "font-semibold": item.isActive
                  })
                }}
              >
                {item.label}
              </ListboxItem>
            }

          </ListboxSection>
        )}
      </Listbox>
    </>
  )
}

export default OSSidebarList