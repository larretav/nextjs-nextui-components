'use client';
import useDebounce from '@/hooks/useDebounce';
import { useUIStore } from '@/store';
import { removeAccents } from '@/utils/strings.utils';
import { Input } from '@nextui-org/input'
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox'
import clsx from 'clsx'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

type SidebarOption = {
  section: string;
  description: string;
  items: {
    key: string
    label: string
    path: string
  }[]
}

export const SidebarComponentsList = () => {

  const componentSections: SidebarOption[] = useMemo(() => ([
    {
      section: 'Páginas',
      description: 'Paginas OnSite V2',
      items: [
        {
          key: "os-landing",
          label: "OnSite Landing",
          path: '/os-pages/landing'
        },
        {
          key: "os-login",
          label: "OnSite Login",
          path: '/os-pages/login'
        },
        {
          key: "os-register",
          label: "OnSite Register",
          path: '/os-pages/register'
        },
      ]
    },
    {
      section: 'Data display',
      description: 'Avatar, Chip, Badge, etc.',
      items: [
        {
          key: "avatar",
          label: "Avatar",
          path: '/data-display/avatar'
        },
        {
          key: "icons",
          label: "Icons",
          path: '/data-display/icons'
        },
        {
          key: "os-components",
          label: "OnSite components",
          path: '/data-display/os-components'
        },
        {
          key: "badges",
          label: "Badges",
          path: '/data-display/badges'
        }
      ]
    },
    {
      section: 'Feedback',
      description: 'Alerts, Snackbars, etc.',
      items: [
        {
          key: "alerts",
          label: "Alerts",
          path: '/feedback/alerts'
        },
      ]
    },
    {
      section: 'Inputs',
      description: 'Inputs, Toggles, etc.',
      items: [
        {
          key: "switch",
          label: "Switch",
          path: '/inputs/switch'
        },
        {
          key: "radio",
          label: "Radio",
          path: '/inputs/radio'
        }
      ]
    },
    {
      section: 'Navigation',
      description: 'Drawer, Bottom Navigation, etc.',
      items: [
        {
          key: "navbars",
          label: "Navbars",
          path: '/navigation/navbars'
        },
        {
          key: "drawer",
          label: "Drawer",
          path: '/navigation/drawer'
        },
        {
          key: "tabs",
          label: "Tabs",
          path: '/navigation/tabs'
        },
        {
          key: "bottom-nav-bar",
          label: "Bottom Nav Bar",
          path: '/navigation/bottom-nav-bar'
        },
      ]
    },
    {
      section: 'Surfaces',
      description: 'Accordion, Cards, etc.',
      items: [
        {
          key: "cards",
          label: "Cards",
          path: '/surfaces/cards'
        },
  
      ]
    },
  ]), []);

  const toggleSidebar = useUIStore.use.toggleSidebar();

  const [sidebarItems, setSidebarItems] = useState(componentSections);
  const [inputSearch, setInputSearch] = useState("")
  const debounceValue = useDebounce(inputSearch, 500);
  const pathname = usePathname();

  const handleChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => setInputSearch(e.target.value)

  const handleSearch = useCallback(() => {

    const term = debounceValue;

    if (!term || !term.trim())
      setSidebarItems([...componentSections]);

    const result = componentSections.map(section => {
      const itemsFiltered = section.items.filter(item => removeAccents(item.label).toLowerCase().includes(removeAccents(term).toLowerCase()));
      return itemsFiltered.length > 0 ? { ...section, items: itemsFiltered } : null;
    }).filter(section => section != null) as SidebarOption[]

    setSidebarItems(result)
  }, [debounceValue, componentSections])

  const isActive = (url: string) => {
    return url === pathname
  }

  useEffect(() => {
    handleSearch()
  }, [handleSearch, debounceValue])


  return (
    <>
      <Input
        startContent={<FaMagnifyingGlass color="grey" size={20} />}
        placeholder="Buscar..."
        value={inputSearch}
        onChange={handleChangeInputSearch}
      />

      <Listbox
        items={sidebarItems}
        aria-label="Sidebar items"
        onAction={toggleSidebar}
        emptyContent="Sin resultados"
      >
        {({ items, section }) => (
          <ListboxSection key={section} title={section} items={items} classNames={{ group: "flex flex-col gap-1" }}>
            {
              (item) => <ListboxItem
                key={item.key}
                href={item.path}
                onClick={() => { console.log(item.path) }}
                classNames={{
                  base: clsx(
                    "px-4 transition-colors text-default-400", {
                    "text-green-600 dark:text-white data-[hover=true]:text-green-500 transition-colors": isActive(item.path)
                  }),
                  title: clsx("text-medium", {
                    "font-semibold": isActive(item.path)
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
