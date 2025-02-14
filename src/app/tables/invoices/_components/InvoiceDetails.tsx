import InvoiceDetailsMobileCard from '@/components/surfaces/cards/mobile/InvoiceDetailsMobileCard'
import { useInvoiceTableStore } from '@/store/tables/invoice-table-store'
import { Button } from "@heroui/button"
import { Card, CardHeader } from "@heroui/card"
import React from 'react'
import { FaXmark } from 'react-icons/fa6'
export default function InvoiceDetails() {
    const toggleDetails = useInvoiceTableStore.use.toggleDetails()
    const selectedInvoice = useInvoiceTableStore.use.selectedInvoice()

    return (
        <Card className="flex sticky flex-col p-2 mx-2 max-h-screen min-w-72 top-[130px] shadow-sm ">
            <Button isIconOnly radius='full' size='sm' variant='light'
                className='absolute top-3 right-3 z-40'
                onPress={() => toggleDetails(false)}
            >
                <FaXmark size={20} />
            </Button>
            <CardHeader className="flex-col items-start gap-3 px-0 ">
                <p className='px-2 pt-2 font-semibold text-xl'>Folio: {selectedInvoice.folio}</p>
                <p className='px-2 text-sm font-medium'>Conceptos: {selectedInvoice.breakdown.length}</p>
            </CardHeader>
            <div className="flex overflow-y-scroll sticky flex-col gap-2 p-1 w-full scrollbar-minimalist">
                {selectedInvoice?.breakdown?.map((item, index) =>
                    <InvoiceDetailsMobileCard
                        key={item.id + index}
                        id={item.id}
                        amount={item.amount}
                        date={item.date}
                        className="dark:bg-zinc-800 "
                    />
                )}
            </div>
        </Card>
    )
}