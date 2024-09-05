import React from 'react'
import { Card, CardBody} from "@nextui-org/card";
import Image from 'next/image';
import boxImage from "@/assets/box.png"
type Props = {
    title: string
    subtitle: string,
    weightMeasures: string,
    quantity: number
}

export default function PackageCard({ title, subtitle, weightMeasures, quantity }: Props) {
    return (
        <Card className='flex-row h-fit shadow-md gap-2 pl-2 p-5 py-0' >
            <div className='flex '>
                <Image
                    className="self-center"
                    alt='caja'
                    width={40}
                    height={40}
                    src={boxImage} />
            </div>
            <CardBody className='flex flex-row'>
                <div className='w-full'>
                    <p className='font-semibold text-sm '>{title}</p>
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
