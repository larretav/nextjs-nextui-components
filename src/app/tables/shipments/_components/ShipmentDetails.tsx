import PackageMobileCard from '@/components/surfaces/cards/mobile/PackageMobileCard'
import {ShipmentDetailsMapper  } from '@/mapper/shipmentsDetailsMapper'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Button } from '@nextui-org/button'
import { Card, CardHeader } from '@nextui-org/card'
import React, { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import {ShipmentDetailsItem} from "@/mapper/shipmentsDetailsMapper"
export default function ShipmentDetails() {
  const toggleDetails = useShipmentTableStore.use.toggleDetails()
  const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
  const [details, setDetails] = useState<ShipmentDetailsItem[]>()
  useEffect(()=>{
    async function callApi(){
      const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InBrdDFmaGVyIiwibmJmIjoxNzI3OTA3NTgwLCJleHAiOjE3Mjc5OTM5ODAsImlhdCI6MTcyNzkwNzU4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDQ2OSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTA0NjkifQ.VvIsdYrnuZR8TortgbXv70889hDFqjw7JqnkRExotIA"

    })
      const response = await fetch(`https://onsite.pktuno.mx/ws2//Api/DocOS/obtenerDetallesDoc/a15df564-22f4-11eb-860f-00505632f3b46212?id=${selectedShipmentOrder.id}`,{
        headers: myHeaders,
      })
      const json = await response.json()
      
      const mappedResponse = ShipmentDetailsMapper.fromResponse(json)
      console.log(mappedResponse.data)
      setDetails(mappedResponse.data)
    }
    callApi()
  },[selectedShipmentOrder])
  return (
    <Card className="flex sticky flex-col p-2 max-h-[90vh] mx-3  min-w-72 top-[110px] shadow-sm">                 
      <Button isIconOnly radius='full' size='sm' variant='light'
        className='absolute top-3 right-3 z-40'
        onPress={() => toggleDetails(false)}
      >
        <FaXmark size={20} />
      </Button>
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