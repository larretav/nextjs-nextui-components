import { Card } from '@nextui-org/card'
import { BsBuildingsFill } from 'react-icons/bs'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import React from 'react'
import { Button } from '@nextui-org/button'

type Props = {
    customerName: string,
    address: string
}

export default function CustomerCard({ customerName, address }: Props) {
    return (
        <Card className='flex-row shadow-md p-3'>
            <div className="flex self-center">
                <span className='bg-gray-100 rounded-full flex w-10 h-10 justify-center'>
                    <BsBuildingsFill className='self-center text-slate-600' />
                </span>
            </div>
            <div className='max-w-[80%] ml-3'>
                <p className="font-bold text-base">{customerName}</p>
                <p className="font-medium text-xs text-table-base">{address}</p>
            </div>
            <div className='flex ml-auto'>
                <Button isIconOnly variant="light" size='sm' className='self-center' >
                    <IoEllipsisHorizontal className='self-center' />
                </Button>
            </div>
        </Card>
    )
}