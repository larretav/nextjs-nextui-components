import AddressTableCard from '@/components/surfaces/cards/desktop/AddressTableCard'
import { useCustomerTableStore } from '@/store/tables/customer-table-store'
import { Button } from '@nextui-org/button'
import { Card, CardHeader } from '@nextui-org/card'
import React from 'react'
import { FaXmark } from 'react-icons/fa6'

export default function CustomerDetails() {
    const toggleDetails = useCustomerTableStore.use.toggleDetails()
    const selectedCustomer = useCustomerTableStore.use.selectedCustomer()

    return (
        <Card className="flex sticky flex-col p-2 mx-2 max-h-screen min-w-72 top-[130px] shadow-sm ">
            <Button isIconOnly radius='full' size='sm' variant='light'
                className='absolute top-3 right-3 z-40'
                onPress={() => toggleDetails(false)}
            >
                <FaXmark size={20} />
            </Button>
            <CardHeader className='flex-col items-start gap-3'>
                <p className='pt-2 font-semibold text-lg'>{selectedCustomer.name}</p>
                <p className='text-sm font-medium'>Direcciones: {selectedCustomer.addressList.length}</p>
            </CardHeader>
            <div className="flex overflow-y-scroll sticky flex-col gap-2 p-1 w-full scrollbar-card">
                {selectedCustomer?.addressList?.map((item, index) =>
                    <AddressTableCard
                        key={`${item.address} - ${index}`}
                        address={item.address}
                        location={item.location}
                        country={item.country}
                        postalCode={item.postalCode}
                        className="dark:bg-zinc-800"
                    />
                )}
            </div>
        </Card>
    )
}