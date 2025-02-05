"use client"
import { Card, CardBody } from "@heroui/card"
import { BsBuildingsFill } from 'react-icons/bs'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import React from 'react'
import { Button } from "@heroui/button"

type Props = {
    customerName: string,
    address: string
}

export default function CustomerMobileCard({ customerName, address }: Props) {
    return (
        <Card className='flex-row shadow-md'>
            <CardBody className='flex-row py-4'>
                <div className="flex self-center">
                    <span className='flex justify-center w-10 h-10 bg-gray-100 rounded-full dark:bg-slate-600/50'>
                        <BsBuildingsFill className='self-center text-slate-600 dark:text-slate-100' />
                    </span>
                </div>
                <div className='max-w-[65%] ml-3'>
                    <p className="text-base font-bold">{customerName}</p>
                    <p className="text-xs font-medium text-table-base">{address}</p>
                </div>
                <div className='flex ml-auto'>
                    <Button isIconOnly variant="light" size='sm' className='self-center' radius='full'>
                        <IoEllipsisHorizontal className='self-center text-slate-600 dark:text-slate-200' />
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}