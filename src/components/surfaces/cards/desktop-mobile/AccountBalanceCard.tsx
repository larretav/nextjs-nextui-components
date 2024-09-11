import { Card } from '@nextui-org/card'
import Image from 'next/image'
import React from 'react'

type Props = {
  balance: number,
  trackingGuidesQuantity: number,
}

export default function AccountBalanceCard({ balance, trackingGuidesQuantity }: Props) {
  return (
    <Card className='flex-row bg-emerald-100 dark:bg-emerald-800/30 p-5 max-w-72'>
      <div className="flex sm:flex-col w-full">
        <div className='flex'>
          <Image src="/assets/MovingBox.png" alt='caja' width={70} height={70} className='h-auto self-center' />
        </div>
        <div className="flex flex-col">
          <p className='text-nowrap text-emerald-700 dark:text-emerald-200'>Envíos entregados</p>
          <p className='text-emerald-800 text-3xl font-bold dark:text-emerald-200'>${balance.toLocaleString('en-US')}</p>
        </div>
      </div>
      <div className="flex items-end sm:items-start">
        <p className='text-nowrap text-emerald-700 dark:text-emerald-200 font-semibold'>{trackingGuidesQuantity} guías</p>
      </div>
    </Card>
  )
}