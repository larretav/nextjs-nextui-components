"use client"
import React from 'react'
import { Card, CardBody } from "@nextui-org/card";
import PackageType from '../../../data-display/onsite/PackageType';
type Props = {
    leadingIcon: "box" | "envelope" | "pallet"
    title: string
    subtitle: string,
    weightMeasures: string,
    quantity: number,
    className?: React.StyleHTMLAttributes<HTMLImageElement>['className'],
    // className?: string,
}



export default function PackageMobileCard({ leadingIcon, title, subtitle, weightMeasures, quantity, className }: Props) {
    return (
        <Card className={'flex-row gap-2 pr-5 pl-3 py-0 shadow min-h-24 ' + className} >
            <div className='flex'>
                <PackageType type={leadingIcon} className='self-center' />
            </div>
            <CardBody className='flex flex-row scrollbar-hide'>
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
