'use client';
import { DashboardSolid } from '@/components/icons';
import useDebounce from '@/hooks/useDebounce';
import { removeAccents } from '@/utils/strings.utils';
import { Input } from '@nextui-org/input'
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox'
import clsx from 'clsx'
import { usePathname } from 'next/navigation';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

type Props = {}


type SidebarOption = {
  sectionTitle: string;
  items: {
    key: string;
    icon: React.JSX.Element,
    label: string;
    path: string;
  }[]
}

const OSSidebarList = (props: Props) => {

  const sidebarItemsInit: SidebarOption[] = useMemo(() => ([
    {
      sectionTitle: 'Dashboard',
      items: [
        {
          key: 'dashboard',
          label: 'Resumen',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18"/>,
          path: '/navigation'
        },
        {
          key: 'quotatio',
          label: 'Cotizar',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18" />,
          path: '/'
        },
      ]
    },
    {
      sectionTitle: 'Catálogos',
      items: [
        {
          key: 'customer',
          label: 'Cliente',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18" />,
          path: '/'
        },
        {
          key: 'boxes',
          label: 'Cajas',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18" />,
          path: '/'
        },
        {
          key: 'postal-codes',
          label: 'Códigos postales',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18" />,
          path: '/'
        },
      ]
    },
    {
      sectionTitle: 'Salidas',
      items: [
        {
          key: 'output-list',
          label: 'Listado de salidas',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18" />,
          path: '/'
        },
        {
          key: 'delivery-notifications',
          label: 'Notificación de entregas',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18" />,
          path: '/'
        },
        {
          key: 'pickup-request',
          label: 'Solicitud de recolección',
          icon: <DashboardSolid size={18} viewBox="0 0 18 18" />,
          path: '/'
        },
      ]
    },
  ]), [])



  const [sidebarItems, setSidebarItems] = useState(sidebarItemsInit);
  const [inputSearch, setInputSearch] = useState("")
  const debounceValue = useDebounce(inputSearch, 500);
  const pathname = usePathname();

  const handleChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => setInputSearch(e.target.value)

  const handleSearch = useCallback(() => {

    const term = debounceValue;

    if (!term || !term.trim())
      setSidebarItems([...sidebarItemsInit]);

    const result = sidebarItemsInit.map(section => {
      const itemsFiltered = section.items.filter(item => removeAccents(item.label).toLowerCase().includes(removeAccents(term).toLowerCase()));
      return itemsFiltered.length > 0 ? { ...section, items: itemsFiltered } : null;
    }).filter(section => section != null) as SidebarOption[]

    setSidebarItems(result)
  }, [debounceValue, sidebarItemsInit])

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
        className="sticky top-0 z-10"
      />

      <Listbox
        items={sidebarItems}
        aria-label="Sidebar items"
        onAction={(key) => console.log(key)}
        emptyContent="Sin resultados"
      >
        {({ items, sectionTitle }) => (
          <ListboxSection key={sectionTitle} title={sectionTitle} items={items} classNames={{ group: "flex flex-col gap-1" }}>
            {
              (item) => <ListboxItem
                key={item.key}
                startContent={item.icon}
                classNames={{
                  base: clsx(
                    "py-2 px-4 transition-colors", {
                    "border-0 bg-green-600/10 text-green-700 data-[hover=true]:bg-green-600/30 data-[hover=true]:text-green-700 dark:text-green-600 border-0 transition-colors": isActive(item.path)
                  }),
                  title: clsx({
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

export default OSSidebarList