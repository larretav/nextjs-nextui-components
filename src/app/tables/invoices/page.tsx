"use client"
import React, { useCallback } from 'react'
import { useInvoiceTableStore } from '@/store/tables/invoice-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Selection, getKeyValue } from "@nextui-org/table"
import { Button } from '@nextui-org/button'
import { FaEllipsisVertical } from 'react-icons/fa6'
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { PageTitle } from '@/components'
import { Invoice } from '@/types/invoice.type'
import InvoiceDetails from './_components/InvoiceDetails'
import PopoverFilter from './_components/PopoverFilter'
import { DateFormatter } from '@internationalized/date'
import { filterInvoice } from './functions/filterInvoices'
import { SharedSelection } from '@nextui-org/system'
import { Select, SelectItem } from '@nextui-org/select'
import { Pagination } from '@nextui-org/pagination'
const dataMock: Invoice[] = [
  {
    folio: "LMAO-71",
    date: "2024-08-14T09:00:00.000",
    paymentMethod: "Tarjeta Débito",
    total: 1500,
    status: "active",
    breakdown: [
      {
        id: "001400899",
        date: "15/05/2024",
        amount: 250.00,
        country: "Mx",
      },
      {
        id: "001500899",
        date: "15/05/2024",
        amount: 300.00,
        country: "Mx",
      },
      {
        id: "001600899",
        date: "16/05/2024",
        amount: 200.00,
        country: "USA",
      },
      {
        id: "001700899",
        date: "16/05/2024",
        amount: 150.00,
        country: "USA",
      },
      {
        id: "001800899",
        date: "17/05/2024",
        amount: 100.00,
        country: "Mx",
      },
      {
        id: "001900899",
        date: "17/05/2024",
        amount: 500.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-72",
    date: "2024-08-15T09:00:00.000",
    paymentMethod: "Efectivo",
    total: 2000,
    status: "active",
    breakdown: [
      {
        id: "002000899",
        date: "17/05/2024",
        amount: 800.00,
        country: "Mx",
      },
      {
        id: "002100899",
        date: "17/05/2024",
        amount: 400.00,
        country: "Mx",
      },
      {
        id: "002200899",
        date: "18/05/2024",
        amount: 300.00,
        country: "USA",
      },
      {
        id: "002300899",
        date: "18/05/2024",
        amount: 200.00,
        country: "USA",
      },
      {
        id: "002400899",
        date: "18/05/2024",
        amount: 300.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-73",
    date: "2024-08-16T09:00:00.000",
    paymentMethod: "Transferencia",
    total: 3000,
    status: "no balance",
    breakdown: [
      {
        id: "002500899",
        date: "18/05/2024",
        amount: 1200.00,
        country: "Mx",
      },
      {
        id: "002600899",
        date: "18/05/2024",
        amount: 800.00,
        country: "Mx",
      },
      {
        id: "002700899",
        date: "19/05/2024",
        amount: 500.00,
        country: "USA",
      },
      {
        id: "002800899",
        date: "19/05/2024",
        amount: 300.00,
        country: "USA",
      },
      {
        id: "002900899",
        date: "19/05/2024",
        amount: 200.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-74",
    date: "2024-08-17T09:00:00.000",
    paymentMethod: "Tarjeta Crédito",
    total: 2500,
    status: "active",
    breakdown: [
      {
        id: "003000899",
        date: "19/05/2024",
        amount: 1000.00,
        country: "Mx",
      },
      {
        id: "003100899",
        date: "19/05/2024",
        amount: 600.00,
        country: "Mx",
      },
      {
        id: "003200899",
        date: "20/05/2024",
        amount: 400.00,
        country: "USA",
      },
      {
        id: "003300899",
        date: "20/05/2024",
        amount: 200.00,
        country: "USA",
      },
      {
        id: "003400899",
        date: "20/05/2024",
        amount: 300.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-75",
    date: "2024-08-18T09:00:00.000",
    paymentMethod: "PayPal",
    total: 1800,
    status: "active",
    breakdown: [
      {
        id: "003500899",
        date: "20/05/2024",
        amount: 800.00,
        country: "Mx",
      },
      {
        id: "003600899",
        date: "20/05/2024",
        amount: 400.00,
        country: "Mx",
      },
      {
        id: "003700899",
        date: "21/05/2024",
        amount: 300.00,
        country: "USA",
      },
      {
        id: "003800899",
        date: "21/05/2024",
        amount: 300.00,
        country: "USA",
      }
    ]
  },
  {
    folio: "LMAO-76",
    date: "2024-08-19T09:00:00.000",
    paymentMethod: "Efectivo",
    total: 2200,
    status: "no balance",
    breakdown: [
      {
        id: "003900899",
        date: "21/05/2024",
        amount: 1000.00,
        country: "Mx",
      },
      {
        id: "004000899",
        date: "21/05/2024",
        amount: 600.00,
        country: "Mx",
      },
      {
        id: "004100899",
        date: "22/05/2024",
        amount: 200.00,
        country: "USA",
      },
      {
        id: "004200899",
        date: "22/05/2024",
        amount: 400.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-77",
    date: "2024-08-20T09:00:00.000",
    paymentMethod: "Transferencia",
    total: 2800,
    status: "active",
    breakdown: [
      {
        id: "004300899",
        date: "22/05/2024",
        amount: 1200.00,
        country: "Mx",
      },
      {
        id: "004400899",
        date: "22/05/2024",
        amount: 800.00,
        country: "Mx",
      },
      {
        id: "004500899",
        date: "23/05/2024",
        amount: 400.00,
        country: "USA",
      },
      {
        id: "004600899",
        date: "23/05/2024",
        amount: 400.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-79",
    date: "2024-08-21T09:00:00.000",
    paymentMethod: "Tarjeta Crédito",
    total: 2000,
    status: "active",
    breakdown: [
      {
        id: "005000899",
        date: "24/05/2024",
        amount: 1000.00,
        country: "Mx",
      },
      {
        id: "005100899",
        date: "25/05/2024",
        amount: 1000.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-80",
    date: "2024-08-22T09:00:00.000",
    paymentMethod: "PayPal",
    total: 1500,
    status: "active",
    breakdown: [
      {
        id: "005200899",
        date: "25/05/2024",
        amount: 750.00,
        country: "Mx",
      },
      {
        id: "005300899",
        date: "26/05/2024",
        amount: 750.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-81",
    date: "2024-08-22T09:00:00.000",
    paymentMethod: "Efectivo",
    total: 1200,
    status: "no balance",
    breakdown: [
      {
        id: "005400899",
        date: "26/05/2024",
        amount: 600.00,
        country: "Mx",
      },
      {
        id: "005500899",
        date: "27/05/2024",
        amount: 600.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-82",
    date: "2024-08-23T09:00:00.000",
    paymentMethod: "Transferencia",
    total: 2500,
    status: "active",
    breakdown: [
      {
        id: "005600899",
        date: "27/05/2024",
        amount: 1250.00,
        country: "Mx",
      },
      {
        id: "005700899",
        date: "28/05/2024",
        amount: 1250.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-83",
    date: "2024-08-23T09:00:00.000",
    paymentMethod: "Tarjeta Débito",
    total: 1800,
    status: "active",
    breakdown: [
      {
        id: "005800899",
        date: "28/05/2024",
        amount: 900.00,
        country: "Mx",
      },
      {
        id: "005900899",
        date: "29/05/2024",
        amount: 900.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-84",
    date: "2024-08-24T09:00:00.000",
    paymentMethod: "Tarjeta Crédito",
    total: 2200,
    status: "active",
    breakdown: [
      {
        id: "006000899",
        date: "29/05/2024",
        amount: 1100.00,
        country: "Mx",
      },
      {
        id: "006100899",
        date: "30/05/2024",
        amount: 1100.00,
        country: "Mx",
      }
    ]
  },
  {
    folio: "LMAO-85",
    date: "2024-08-25T09:00:00.000",
    paymentMethod: "PayPal",
    total: 2800,
    status: "no balance",
    breakdown: [
      {
        id: "006200899",
        date: "30/05/2024",
        amount: 1400.00,
        country: "Mx",
      },
      {
        id: "006300899",
        date: "31/05/2024",
        amount: 1400.00,
        country: "Mx",
      }
    ]
  }
]
export default function InvoicesTablePage() {
  const isDetailsOpen = useInvoiceTableStore.use.isDetailsOpen()
  const toggleDetails = useInvoiceTableStore.use.toggleDetails()
  const selectInvoice = useInvoiceTableStore.use.selectInvoice()
  const selectedTabKey = useInvoiceTableStore.use.selectedTabKey() as string
  const setSelectedTabKey = useInvoiceTableStore.use.setSelectedTabKey()

  //Pagination
  const page = useInvoiceTableStore.use.page()
  const setPage = useInvoiceTableStore.use.setPage()
  const rowsPerPage = useInvoiceTableStore.use.rowsPerPage()
  const setRowsPerPage = useInvoiceTableStore.use.setRowsPerPage()

  const { filterByFilterWord, filterByStatus } = filterInvoice(dataMock)

  //Tab item count
  const activeInvoice = filterByFilterWord.filter((item) => item.status === "active").length
  const noBalanceInvoice = filterByFilterWord.filter((item) => item.status === "no balance").length

  const handleSelectionChange = (ev: Selection) => {
    const orderId = Array.from(ev)[0]
    const invoice = filterByFilterWord.find((item) => item.folio === orderId)
    if (invoice) {
      selectInvoice(invoice)
      toggleDetails(true)
    } else {
      toggleDetails(false)
    }
  }

  const columns = [{
    key: "folio",
    label: "Folio"
  },
  {
    key: "date",
    label: "Fecha"
  },
  {
    key: "payment method",
    label: "Método de pago"
  },
  {
    key: "total",
    label: "Total"
  },
  {
    key: "actions",
    label: "Acciones"
  },
  ]
  const formatter = new DateFormatter('es-MX', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const rows = filterByStatus.map((item) => {
    return {
      key: item.folio,
      folio: item.folio,
      date: formatter.format(new Date(item.date)),
      "payment method": item.paymentMethod,
      total: `$${item.total.toFixed(2)}`,
      actions: <Button isIconOnly radius="full" size="sm" variant="light">
        <FaEllipsisVertical size={16} className="text-zinc-500" />
      </Button>
    }
  })
  //Pagination logic from nextui docs
  const pages = Math.ceil(rows.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = rows.slice(start, end);

  const onRowsPerPageChange = useCallback((val: SharedSelection) => {
    if (val.currentKey) setRowsPerPage(Number(val.currentKey));
    setPage(1);
  }, [setPage, setRowsPerPage]);

  const onTabChange = useCallback((key: React.Key) => {
    setSelectedTabKey(key)
    setPage(1)
  }, [setSelectedTabKey, setPage])

  return (
    <div className='bg-zinc-100 dark:bg-zinc-950'>
      <div className="flex p-2 px-4 rounded-lg">
        <PageTitle text='Facturas' />
      </div>
      <div className='flex p-3'>
        <div className="flex flex-col w-full bg-neutral-50 rounded-xl dark:bg-zinc-900">
          <div className="flex px-5">
            <TabsFilters fullWidth selectedKey={selectedTabKey} onSelectionChange={onTabChange} >
              <TabFilter key={"Todos"} text="Todos" value={filterByFilterWord.length} activeColor="amber" />
              <TabFilter key={"active"} text="Activos" value={activeInvoice} activeColor="green" />
              <TabFilter key={"no balance"} text="Sin saldo" value={noBalanceInvoice} activeColor="red" />
            </TabsFilters>
            <div className='flex items-center ml-auto'>
              <PopoverFilter />
            </div>
          </div>
          <Table aria-label="Tabla de clientes" selectionMode='single' selectionBehavior='toggle' removeWrapper
            onSelectionChange={handleSelectionChange}
            bottomContent={
              pages > 0 && <div className="flex w-full justify-center gap-2">
                <div className="flex items-center gap-2">
                  <label className="flex items-center text-default-400 text-small text-nowrap">
                    Filas por página:
                  </label>
                  <Select
                    selectionMode='single'
                    disallowEmptySelection
                    aria-label='filas por página'
                    size='sm'
                    className="bg-transparent outline-none text-default-400 text-small w-20"
                    value={rowsPerPage}
                    defaultSelectedKeys={rowsPerPage.toString()}
                    onSelectionChange={(e) => onRowsPerPageChange(e)}
                  >
                    <SelectItem key={2} value="2">2</SelectItem>
                    <SelectItem key={5} value="5">5</SelectItem>
                    <SelectItem key={25} value="25">25</SelectItem>
                  </Select>
                </div>
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => { page > 0 ? setPage(page) : setPage(1) }}
                />
              </div>
            }>
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={paginatedItems} emptyContent="No hay resultados que coincidan con la búsqueda">
              {(item) => (
                <TableRow key={item.key} className='cursor-pointer' >
                  {(columnKey) =>
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>)}
            </TableBody>
          </Table>
        </div>
        <div>
          {isDetailsOpen && <InvoiceDetails />}
        </div>
      </div>
    </div>

  )
}

