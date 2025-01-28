import { QuotationRadio } from '@/components'
import { RadioGroup } from '@nextui-org/radio'
import React from 'react'

export const OSQuotationRadio = () => {
  return (
    <RadioGroup>
      <QuotationRadio value="fedex" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="fedex"  />
      <QuotationRadio value="pkt1" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="pkt1"  />
      <QuotationRadio value="paquetexpress" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="paquetexpress"  />
      <QuotationRadio value="dhl" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="dhl"  />
      <QuotationRadio value="ups" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="ups"  />
    </RadioGroup>
  )
}
