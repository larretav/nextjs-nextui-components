import React from 'react'
import InvoiceStatus from '@/components/data-display/onsite/InvoiceStatus'
import { Card } from '@nextui-org/card'
type Props = {
  folio: string,
  date: string,
  payment: string,
  amount: number
  status: "pending" | "paid" | "canceled"
}

export default function InvoiceCard({ folio, date, payment, amount, status }: Props) {
  return (
    <Card className='flex-row py-4 px-3 shadow-md'>
      <div className="">
        <div className="flex gap-2">
          <p className='text-xs font-semibold'>{folio}</p>
          <span className='border-r'></span>
          <p className='text-xs font-medium'>{date}</p>
        </div>
        <p className='text-xs text-default-500'>{payment}</p>
      </div>
      <div className="ml-auto">
        <div className="flex ml-auto">
          <InvoiceStatus status={status} />
          </div>
        <div className="mt-3 font-bold sm:text-xl">${amount.toFixed(2)}MXN</div>
      </div>
    </Card>
  )
}