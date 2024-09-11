import { Card } from '@nextui-org/card'
import Image from 'next/image'
import React from 'react'

type Props = {
  balance: number,
  trackingGuidesQuantity: number,
}

export default function AccountBalanceCard({ balance, trackingGuidesQuantity }: Props) {
  return (
    <Card className='flex-row p-5 bg-emerald-100 max-w-72 dark:bg-emerald-800/30'>
      <div className="flex w-full sm:flex-col">
        <div className='flex'>
          <Image src="/assets/MovingBox.png" alt='caja' width={70} height={70} className='self-center h-auto' />
        </div>
        <div className="flex flex-col">
          <p className='text-emerald-700 dark:text-emerald-200 text-nowrap'>Envíos entregados</p>
          <p className='text-3xl font-bold text-emerald-800 dark:text-emerald-200'>${balance.toLocaleString('en-US')}</p>
        </div>
      </div>
      <div className="flex items-end sm:items-start">
        <p className='font-semibold text-emerald-700 dark:text-emerald-200 text-nowrap'>{trackingGuidesQuantity} guías</p>
      </div>
    </Card>
  )
}