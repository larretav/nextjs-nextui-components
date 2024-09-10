"use client"
import { Badge } from '@nextui-org/badge';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import React from 'react'
import { BsFillBoxSeamFill, } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBillWave, FaRegCreditCard } from "react-icons/fa";
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { MdAttachMoney } from "react-icons/md";
type BadgeIconProps = {
    quantity: number
    className?: string
}
export function BadgeIcon({ quantity, className = "" }: BadgeIconProps) {
    return <>
        <div className="flex items-center gap-4 absolute right-4 top-4">
            <Badge color="success" content={quantity} shape="circle">
                <div className="flex items-center gap-3 rounded-full bg-green-100 p-3 dark:bg-green-500/30">
                    <BsFillBoxSeamFill className="fill-current text-green-600 dark:text-green-200" size={30} />
                </div>
            </Badge>
        </div>
    </>
}

type Props = {
    title: string,
    description?: string,
    cost?: number,
    highlighted?: boolean
    customizedCost?: boolean
    badgeQuantity?: number
}

export default function RechargeCard({ title, description, cost, highlighted, customizedCost, badgeQuantity }: Props) {
    return (
        <Card className='relative px-2 h-min'>
            {customizedCost ? <>
                <CardHeader>
                    <p className='font-semibold text-xl mt-5'>{title}</p>
                </CardHeader>
                <CardBody>
                    <Input startContent={<MdAttachMoney />} />
                </CardBody>
            </> : <>
                <CardHeader>
                    <BadgeIcon quantity={badgeQuantity || 0} />
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
                </CardBody></>}
            <CardFooter>
                {highlighted
                    ? <Button className='w-full text-white bg-emerald-600 font-semibold' variant='bordered'>Recargar</Button>
                    : <Button className='w-full text-emerald-600 border-emerald-600 font-semibold' variant='bordered'>Recargar</Button>}
            </CardFooter>
        </Card>
    )
}