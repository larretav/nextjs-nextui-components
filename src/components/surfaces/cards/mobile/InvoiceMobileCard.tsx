"use client"
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

export default function InvoiceMobileCard({ folio, date, payment, amount, status }: Props) {
  return (
    <Card className='flex-row px-3 py-4 shadow-md'>
      <div className="">
        <div className="flex gap-2">
          <p className='font-semibold text-xs'>{folio}</p>
          <span className='border-r'></span>
          <p className='font-medium text-xs'>{date}</p>
        </div>
        <p className='text-xs text-default-500'>{payment}</p>
      </div>
      <div className="ml-auto">
        <div className="flex ml-auto">
          <InvoiceStatus status={status} />
          </div>
        <div className="font-bold sm:text-xl mt-3">${amount.toFixed(2)}MXN</div>
      </div>
    </Card>
  )
}