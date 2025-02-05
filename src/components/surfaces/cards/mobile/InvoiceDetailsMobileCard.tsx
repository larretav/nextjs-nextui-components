"use client"
import { Card, CardBody } from "@heroui/card"
import React from 'react'

type Props = {
    id: string,
    date: string,
    amount: number
    className?:string
}

export default function InvoiceDetailsMobileCard({ id, date, amount, className }: Props) {
    return (
        <Card className={'min-h-14 shadow ' + className}>
            <CardBody className='flex-row'>
                <div>
                    <p className="text-sm font-medium">{id}</p>
                    <p className="text-xs font-medium text-gray-400">{date}</p>
                </div>
                <div className="flex ml-auto text-xl font-medium">
                    <div className='self-center'>${amount.toFixed(2)} <span className="text-xs font-bold">MXN</span></div>
                </div>
            </CardBody>
        </Card>
    )
}