"use client"
import { Card, CardBody } from '@nextui-org/card'
import React from 'react'

type Props = {
    number: string,
    date: string,
    amount: number
}

export default function InvoiceDetailsCard({ number, date, amount }: Props) {
    return (
        <Card>
            <CardBody className='flex-row'>
                <div>
                    <p className="text-sm font-medium">{number}</p>
                    <p className="text-xs text-gray-400 font-medium">{date}</p>
                </div>
                <div className="flex ml-auto text-xl font-medium">
                    <p className='self-center'>${amount.toFixed(2)}MXN</p>
                </div>
            </CardBody>
        </Card>
    )
}