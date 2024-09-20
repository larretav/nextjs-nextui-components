"use client"
import React from 'react'
import { useBillTableStore } from '@/store/tables/bills-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table"
import { Button } from '@nextui-org/button'
import { FaEye } from 'react-icons/fa6'
import { Card } from '@nextui-org/card'
import { RxCross2 } from "react-icons/rx";
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { FaFilter } from "react-icons/fa";
import { PageTitle } from '@/components'
import { Bill } from '@/types/bill.type'

import InvoiceDetailsMobileCard from '@/components/surfaces/cards/mobile/InvoiceDetailsMobileCard'
const dataMock: Bill[] = [
    {
        folio: "LMAO-71",
        date: "17/05/2024",
        paymentMethod: "Tarjeta Débito",
        total: 1500,
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
        date: "18/05/2024",
        paymentMethod: "Efectivo",
        total: 2000,
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
        date: "19/05/2024",
        paymentMethod: "Transferencia",
        total: 3000,
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
        date: "20/05/2024",
        paymentMethod: "Tarjeta Crédito",
        total: 2500,
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
        date: "21/05/2024",
        paymentMethod: "PayPal",
        total: 1800,
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
        date: "22/05/2024",
        paymentMethod: "Efectivo",
        total: 2200,
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
        date: "23/05/2024",
        paymentMethod: "Transferencia",
        total: 2800,
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
        date: "25/05/2024",
        paymentMethod: "Tarjeta Crédito",
        total: 2000,
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
        date: "26/05/2024",
        paymentMethod: "PayPal",
        total: 1500,
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
        date: "27/05/2024",
        paymentMethod: "Efectivo",
        total: 1200,
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
        date: "28/05/2024",
        paymentMethod: "Transferencia",
        total: 2500,
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
        date: "29/05/2024",
        paymentMethod: "Tarjeta Débito",
        total: 1800,
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
        date: "30/05/2024",
        paymentMethod: "Tarjeta Crédito",
        total: 2200,
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
        date: "31/05/2024",
        paymentMethod: "PayPal",
        total: 2800,
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
export default function Page() {
    const isDetailsOpen = useBillTableStore.use.isDetailsOpen()
    const toggleDetails = useBillTableStore.use.toggleDetails()
    const selectedBill = useBillTableStore.use.selectedBill()
    const selectBill = useBillTableStore.use.selectBill()
    const selectedKey = useBillTableStore.use.selectedTabKey() as string
    const setSelectedKey = useBillTableStore.use.setSelectedTabKey()

    return (
        <div className='bg-zinc-100 dark:bg-zinc-800'>
            <div className="flex p-2 px-4 rounded-lg">
                <PageTitle text='Facturas' />
            </div>
            <div className='flex p-3'>
                <div className="flex flex-col w-full bg-white rounded-xl dark:bg-zinc-900">
                    <div className="flex px-5">
                        <TabsFilters fullWidth selectedKey={selectedKey} onSelectionChange={setSelectedKey} >
                            <TabFilter key={1} text="Todos" value="1080" activeColor="amber" />
                            <TabFilter key={2} text="Activos" value="100" activeColor="green" />
                            <TabFilter key={3} text="Sin Saldo" value="80" activeColor="red" />
                        </TabsFilters>
                        <div className='flex items-center ml-auto'>
                            <Button isIconOnly variant="light" radius='full' size='sm'><FaFilter size={18} /></Button>
                        </div>
                    </div>
                    <Table aria-label="Tabla de clientes" >
                        <TableHeader>
                            <TableColumn>Folio</TableColumn>
                            <TableColumn>Fecha</TableColumn>
                            <TableColumn>Tipo De Pago</TableColumn>
                            <TableColumn>Total</TableColumn>
                            <TableColumn>Acciones</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {dataMock.map((row, index) =>
                                <TableRow key={`${row.folio} - ${index}`}>
                                    <TableCell>{row.folio}</TableCell>
                                    <TableCell>{row.date} </TableCell>
                                    <TableCell>{row.paymentMethod} </TableCell>
                                    <TableCell>${row.total} </TableCell>
                                    <TableCell>
                                        <Button isIconOnly radius='full' size='sm' variant='light'
                                            onPress={() => {
                                                selectBill(row)
                                                toggleDetails(true)
                                            }}
                                        >
                                            <FaEye size={18} className='text-blue-500' />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div>
                    {isDetailsOpen &&
                        <Card className="flex sticky flex-col p-2 mx-2 max-h-96 min-w-72 top-[130px] bg-zinc-100 dark:bg-zinc-800">
                            <Button isIconOnly radius='full' size='sm' variant='light'
                                className='absolute top-3 right-3'
                                onPress={() => toggleDetails(false)}
                            >
                                <RxCross2 size={18} className='text-red-500' />
                            </Button>
                            <p className='px-2 pt-2 font-semibold'>Folio: {selectedBill.folio}</p>
                            <p className='px-3 text-sm font-medium'>Conceptos: {selectedBill.breakdown.length}</p>
                            <div className="flex overflow-y-scroll sticky flex-col gap-2 p-1 w-full scrollbar-hide">
                                {selectedBill?.breakdown?.map((item, index) =>
                                    <InvoiceDetailsMobileCard
                                        key={item.id + index}
                                        id={item.id}
                                        amount={item.amount}
                                        date={item.date}
                                    />
                                )}
                            </div>
                        </Card>}
                </div>
            </div>
        </div>

    )
}

