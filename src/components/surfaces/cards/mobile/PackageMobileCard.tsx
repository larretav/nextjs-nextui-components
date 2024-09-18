"use client"
import React from 'react'
import { Card, CardBody } from "@nextui-org/card";
import PackageType from '../../../data-display/onsite/PackageType';
type Props = {
    leadingIcon: "box" | "envelope" | "pallet"
    title: string
    subtitle: string,
    weightMeasures: string,
    quantity: number
}



export default function PackageMobileCard({ leadingIcon, title, subtitle, weightMeasures, quantity }: Props) {
    return (
        <Card className='flex-row gap-2 p-5 py-0 pl-2 shadow-md min-h-20' >
            <div className='flex'>
                <PackageType type={leadingIcon} className='self-center' />
            </div>
            <CardBody className='flex flex-row'>
                <div className='w-full'>
                    <p className='text-sm font-semibold'>{title}</p>
                    <p className='text-xs text-gray-400'>{subtitle}</p>
                    <p className='text-xs font-bold tracking-widest'>{weightMeasures}</p>
                </div>
                <div className='self-center text-base font-bold'>
                    X{quantity}
                </div>
            </CardBody>
        </Card>
    )
}
