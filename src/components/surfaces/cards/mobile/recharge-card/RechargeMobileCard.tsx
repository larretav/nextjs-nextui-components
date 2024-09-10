"use client"
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBillWave, FaRegCreditCard } from "react-icons/fa";
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { MdAttachMoney } from "react-icons/md";
import BadgeIcon from '@/components/data-display/badge/BoxBadge';


type Props = {
    title: string,
    description?: string,
    cost?: number,
    highlighted?: boolean    
    badgeQuantity?: number
}

export default function RechargeMobileCard({ title, description, cost, highlighted,  badgeQuantity }: Props) {
    return (
        <Card className='relative px-2 h-min'>
            <CardHeader>
                    <BadgeIcon className='absolute top-4 right-4' quantity={badgeQuantity || 0} />
                    <p className='font-medium'>{title}</p>
                </CardHeader>
                <CardBody>
                    <p className='font-bold text-3xl'>${cost?.toFixed(2)}MXN</p>
                    <p className='p-1  bg-zinc-100 dark:bg-zinc-500 rounded-lg my-4'>{description}</p>
                    <div className="flex gap-2">
                        <FaMoneyBillWave className='w-7 h-7 text-slate-700 dark:text-slate-200' />
                        <FaMoneyBillTransfer className='w-7 h-7 text-slate-700 dark:text-slate-200' />
                        <FaRegCreditCard className='w-7 h-7 text-slate-700 dark:text-slate-200' />
                    </div>
                </CardBody>
            <CardFooter>
                {highlighted
                    ? <Button className='w-full text-white bg-emerald-600 font-semibold' variant='solid'>Recargar</Button>
                    : <Button className='w-full text-emerald-600 border-emerald-600 font-semibold' variant='flat'>Recargar</Button>}
            </CardFooter>
        </Card>
    )
}