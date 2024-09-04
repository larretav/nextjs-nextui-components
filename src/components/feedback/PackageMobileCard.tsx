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

export default function PackageMobileCard({ title, subtitle, weightMeasures, quantity }: Props) {
    return (
        <Card className='flex flex-row max-w-[410px] p-3'>
            <div className='flex mx-3'>
                <Image
                    className="self-center"
                    alt='caja'
                    width={60}
                    height={60}
                    src={boxImage} />
            </div>
            <CardBody className='flex flex-row'>
                <div className='w-full'>
                    <p className='font-semibold text-sm'>{title}</p>
                    <p className='text-gray-400 text-xs'>{subtitle}</p>
                    <p className='font-bold text-xs tracking-widest'>{weightMeasures}</p>
                </div>
                <div className='self-center text-2xl font-bold'>
                    X{quantity}
                </div>
            </CardBody>
        </Card>
    )
}
