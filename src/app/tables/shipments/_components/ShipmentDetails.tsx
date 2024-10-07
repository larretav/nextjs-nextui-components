import PackageMobileCard from '@/components/surfaces/cards/mobile/PackageMobileCard'
import { ShipmentDetailsMapper } from '@/mapper/shipmentsDetailsMapper'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Card, CardHeader } from '@nextui-org/card'
import React, { useEffect, useState } from 'react'
import { ShipmentDetailsItem } from "@/mapper/shipmentsDetailsMapper"
import toast from 'react-hot-toast'
export default function ShipmentDetails() {
  const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
  const [details, setDetails] = useState<ShipmentDetailsItem[]>()
  useEffect(() => {
    callShipmentDetailsApi()
  }, [selectedShipmentOrder])
  async function callShipmentDetailsApi() {
    try {
      const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": process.env.NEXT_PUBLIC_TOKEN || ""
      })
      const response = await fetch(`https://onsite.pktuno.mx/ws2//Api/DocOS/obtenerDetallesDoc/a15df564-22f4-11eb-860f-00505632f3b46212?id=${selectedShipmentOrder.id}`, {
        headers: myHeaders,
      })
      const json = await response.json()
      const mappedResponse = ShipmentDetailsMapper.fromResponse(json)
      setDetails(mappedResponse.data)
    } catch (error) {
      toast.error("Error al obtener los detalles de la orden")
    }
  }
  return (
    <Card className="flex sticky flex-col p-2 max-h-[90vh] mx-3  min-w-72 top-[110px] shadow-sm">
      <CardHeader className="flex-col items-start gap-3 px-1">
        <p className='pt-2 font-semibold text-xl'>Orden #{selectedShipmentOrder.id}</p>
        <p className='text-sm font-medium'>Paquetes: {details?.length}</p>
      </CardHeader>
      <div className="flex overflow-y-scroll sticky flex-col gap-2 w-full scrollbar-minimalist p-1">
        {details?.map((item, index) =>
          <PackageMobileCard key={`${item.id}-${index}`}
            leadingIcon={item.getType}
            title={item.content}
            subtitle={item.productSatDescription}
            quantity={item.quantity}
            weightMeasures={item.getWeightMeasures}
            className="dark:bg-zinc-800 pr-2"
          />
        )}
      </div>
    </Card>
  )
}