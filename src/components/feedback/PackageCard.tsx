import React from 'react'
import { Card, CardBody } from "@nextui-org/card";
import PackageType from '../icons/composed/PackageType';
type Props = {
    leadingIcon: "box" | "envelope" | "pallet"
    title: string
    subtitle: string,
    weightMeasures: string,
    quantity: number
}

export default function PackageCard({ leadingIcon, title, subtitle, weightMeasures, quantity }: Props) {
    return (
        <Card className='flex-row shadow-md  gap-2 pl-2 p-5 py-0' >
            <div className='flex'>
                <PackageType type={leadingIcon} className='self-center' />
            </div>
            <CardBody className='flex flex-row'>
                <div className='w-full'>
                    <p className='font-semibold text-sm'>{title}</p>
                    <p className='text-gray-400 text-xs'>{subtitle}</p>
                    <p className='font-bold text-xs tracking-widest'>{weightMeasures}</p>
                </div>
                <div className='self-center text-base font-bold'>
                    X{quantity}
                </div>
            </CardBody>
        </Card>
    )
}
