"use client"
import { Card, CardBody } from '@nextui-org/card'
import React from 'react'

type Props = {
    number: string,
    date: string,
    amount: number
}

export default function InvoiceDetailsMobileCard({ number, date, amount }: Props) {
    return (
        <Card>
            <CardBody className='flex-row'>
                <div>
                    <p className="text-sm font-medium">{number}</p>
                    <p className="text-xs font-medium text-gray-400">{date}</p>
                </div>
                <div className="flex ml-auto text-xl font-medium">
                    <p className='self-center'>${amount.toFixed(2)}MXN</p>
                </div>
            </CardBody>
        </Card>
    )
}