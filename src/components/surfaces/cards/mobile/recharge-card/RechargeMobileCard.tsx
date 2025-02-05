"use client"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBillWave, FaRegCreditCard } from "react-icons/fa";
import { Button, } from "@heroui/button";
import BadgeIcon from '@/components/data-display/badge/BoxBadge';

type paymentMethods = "card" | "cash" | "transfer"
type Props = {
    title: string,
    description?: string,
    cost: number,
    badgeQuantity: number
    paymentMethods: paymentMethods[]
    highlighted?: boolean
}
const paymentMethodsIcon = {
    cash: <FaMoneyBillWave className='w-7 h-7 text-slate-700 dark:text-slate-200' />,
    transfer: <FaMoneyBillTransfer className='w-7 h-7 text-slate-700 dark:text-slate-200' />,
    card: <FaRegCreditCard className='w-7 h-7 text-slate-700 dark:text-slate-200' />
}

export default function RechargeMobileCard({ title, description, cost, highlighted, badgeQuantity, paymentMethods = [] }: Props) {
    return (
        <Card className='relative px-2 shadow-md h-min'>
            <CardHeader>
                <BadgeIcon className='absolute top-4 right-4' quantity={badgeQuantity || 0} />
                <p className='font-medium'>{title}</p>
            </CardHeader>
            <CardBody>
                <p className='text-3xl font-bold'>${cost?.toFixed(2)}MXN</p>
                <p className='p-1 my-4 rounded-lg bg-zinc-100 dark:bg-zinc-500'>{description}</p>
                <div className="flex gap-2">
                    {paymentMethods.map((method, index) => <div key={method + index}>
                        {paymentMethodsIcon[method]}
                    </div>)}
                </div>
            </CardBody>
            <CardFooter>
                {highlighted
                    ? <Button className='w-full font-semibold text-white bg-emerald-600' variant='solid'>Recargar</Button>
                    : <Button className='w-full font-semibold text-emerald-600 border-emerald-600' variant='flat'>Recargar</Button>}
            </CardFooter>
        </Card>
    )
}