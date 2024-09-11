"use client"
import { Card, CardBody } from '@nextui-org/card'
import React from 'react'

type Props = {
    content: string,
    type: string,
    dimensions: string,
    quantity: number
}

export default function ContentSummaryMobileCard({ content, type, dimensions, quantity }: Props) {
    return (
        <Card>
            <CardBody className='flex-row py-6 px-5'>
                <div className="flex flex-col text-sm">
                    <p >
                        <span className='font-semibold'>Contenido:  </span>
                        {content}
                    </p>
                    <p >
                        <span className='font-semibold'>Tipo:  </span>
                        {type}
                    </p>
                    <p >
                        <span className='font-semibold'>Dimensiones:  </span>
                        {dimensions}
                    </p>
                </div>
                <div className="flex mr-3 ml-auto">
                    <p className='self-center font-semibold'>x{quantity}</p>
                </div>
            </CardBody>
        </Card>
    )
}