import PackageMobileCard from '@/components/surfaces/cards/mobile/PackageMobileCard'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Button } from '@nextui-org/button'
import { Card, CardHeader } from '@nextui-org/card'
import React from 'react'
import { FaXmark } from 'react-icons/fa6'

export default function ShipmentDetailsCard() {
  const isDetailsOpen = useShipmentTableStore.use.isDetailsOpen()
  const toggleDetails = useShipmentTableStore.use.toggleDetails()
  const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
  const selectShipmentOrder = useShipmentTableStore.use.selectShipmentOrder()
  const selectedKey = useShipmentTableStore.use.selectedTabKey() as string
  const setSelectedKey = useShipmentTableStore.use.setSelectedTabKey()
  return (
    <Card className="flex sticky flex-col p-2  mx-3 max-h-96 min-w-72 top-[110px] shadow-sm">
      <Button isIconOnly radius='full' size='sm' variant='light'
        className='absolute top-3 right-3 z-40'
        onPress={() => toggleDetails(false)}
      >
        <FaXmark size={20} />
      </Button>
      <CardHeader className="flex-col items-start gap-3 px-1">
        <p className='pt-2 font-semibold text-xl'>Orden #{selectedShipmentOrder.orderId}</p>
        <p className='text-sm font-medium'>Paquetes: {selectedShipmentOrder.shipmentItems.length}</p>
      </CardHeader>
      <div className="flex overflow-y-scroll sticky flex-col gap-2 w-full scrollbar-hide p-1">
        {selectedShipmentOrder?.shipmentItems?.map((item, index) =>
          <PackageMobileCard key={`${item.title}-${index}`}
            leadingIcon='box'
            title={item.title}
            subtitle={item.subTitle}
            quantity={item.quantity}
            weightMeasures={item.dimensions}
            className="dark:bg-zinc-800 pr-2"
          />
        )}
      </div>
    </Card>
  )
}