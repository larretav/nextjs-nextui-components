'use client';
import { CBadge } from '@/components';
import { ZipCodeSolid, QuotationSolid, NotifDeliverySolid, ShipOutputSolid, ShipmentsSolid, PickupRequestSolid, BranchOfficeShipmentsSolid, RechargesSolid, MegaphoneSolid, DashboardSolid, DeliveredShipmentsReportSolid, DetailedShipmentsReportSolid, BoxPackageSolid, CustomizedShipmentsReportSolid, FaqSolid, FileInvoiceDollarSolid, FileInvoiceSolid, BoxOpenSolid, RouteLineSolid, HeadsetSolid, ConcentratedShipmentsReportSolid, BookSolid } from '@/components/icons';
import useDebounce from '@/hooks/useDebounce';
import { removeAccents } from '@/utils/strings.utils';
import { Input } from "@heroui/input"
import { Listbox, ListboxItem, ListboxSection } from "@heroui/listbox"
import clsx from 'clsx'
import { usePathname } from 'next/navigation';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { MdGroups } from 'react-icons/md';

type Props = {}


type SidebarOption = {
  sectionTitle: string;
  items: {
    key: string;
    icon: React.JSX.Element,
    label: string;
    path: string;
    badge?: ReactElement;
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
          icon: <DashboardSolid />,
          path: '/navigation'
        },
        {
          key: 'quotatio',
          label: 'Cotizar',
          icon: <QuotationSolid />,
          path: '/'
        },
      ]
    },
    {
      sectionTitle: 'Catálogos',
      items: [
        {
          key: 'customers',
          label: 'Clientes',
          icon: <MdGroups />,
          path: '/'
        },
        {
          key: 'boxes',
          label: 'Cajas',
          icon: <BoxOpenSolid />,
          path: '/'
        },
        {
          key: 'postal-codes',
          label: 'Códigos postales',
          icon: <ZipCodeSolid />,
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
          icon: <ShipOutputSolid />,
          path: '/'
        },
        {
          key: 'delivery-notifications',
          label: 'Notificación de entregas',
          icon: <NotifDeliverySolid />,
          path: '/',
          badge: <CBadge content="5" />
        },
        {
          key: 'pickup-request',
          label: 'Solicitud de recolección',
          icon: <PickupRequestSolid />,
          path: '/',
          badge: <CBadge content="new" />
        },
      ]
    },
    {
      sectionTitle: 'Consultas',
      items: [
        {
          key: 'shipments',
          label: 'Envíos',
          icon: <ShipmentsSolid />,
          path: '/'
        },
        {
          key: 'invoices',
          label: 'Facturas',
          icon: <FileInvoiceSolid />,
          path: '/',
          badge: <CBadge content="5" />
        },
        {
          key: 'branch-office-shipments',
          label: 'Envíos de sucursal',
          icon: <BranchOfficeShipmentsSolid />,
          path: '/'
        },
        {
          key: 'notices',
          label: 'Avisos',
          icon: <MegaphoneSolid />,
          path: '/'
        },
      ]
    },
    {
      sectionTitle: 'Estado de cuenta',
      items: [
        {
          key: 'account-summary',
          label: 'Resumen de cuenta',
          icon: <FileInvoiceDollarSolid />,
          path: '/'
        },
        {
          key: 'recharges',
          label: 'Recargas',
          icon: <RechargesSolid />,
          path: '/'
        },
        {
          key: 'payment-invoices',
          label: 'Facturas de pago',
          icon: <FileInvoiceSolid />,
          path: '/'
        },
      ]
    },
    {
      sectionTitle: 'Reportes',
      items: [
        {
          key: 'delivered-shipments',
          label: 'Envíos entregados',
          icon: <DeliveredShipmentsReportSolid />,
          path: '/'
        },
        {
          key: 'detailed-shipments',
          label: 'Envíos (detallado)',
          icon: <DetailedShipmentsReportSolid />,
          path: '/'
        },
        {
          key: 'concentrated-shipments',
          label: 'Envíos (concentrado)',
          icon: <ConcentratedShipmentsReportSolid />,
          path: '/'
        },
        {
          key: 'custom-shipments',
          label: 'Envíos (personalizado)',
          icon: <CustomizedShipmentsReportSolid />,
          path: '/'
        },
      ]
    },
    {
      sectionTitle: 'Ayuda',
      items: [
        {
          key: 'manual',
          label: 'Manuales',
          icon: <BookSolid />,
          path: '/'
        },
        {
          key: 'faq',
          label: 'Preguntas frecuentes',
          icon: <FaqSolid />,
          path: '/'
        },
        {
          key: 'support',
          label: 'Soporte',
          icon: <HeadsetSolid />,
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
          <ListboxSection key={sectionTitle} title={sectionTitle} items={items} classNames={{ group: "flex flex-col gap-1", heading: "uppercase font-semibold", }}>
            {
              (item) => <ListboxItem
                key={item.key}
                startContent={item.icon}
                endContent={item?.badge}
                classNames={{
                  base: clsx(
                    "py-2 px-4 transition-colors text-slate-600 dark:text-slate-100 data-[hover=true]:text-slate-600 data-[hover=true]:bg-default-200", {
                    "bg-green-600/10 text-green-700 data-[hover=true]:bg-green-600/30 data-[hover=true]:text-green-700 dark:text-green-600 transition-colors": isActive(item.path)
                  }),
                  title: clsx({
                    "font-semibold": isActive(item.path)
                  }),

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