"use client"
import PackageType from '@/components/data-display/onsite/PackageType'
import { Card, CardBody } from '@nextui-org/card'
import { Input } from "@nextui-org/input";
import React  from 'react'
import SimpleCounter from '@/components/inputs/SimpleCounter';

type Props = {
    content: string,
    packageType: "box" | "envelope" | "pallet",
}

export default function PackageItem({ content, packageType }: Props) {
    return (
        <Card >
            <CardBody className='flex-row'>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-2 items-center">
                        <PackageType type={packageType} width={30} height={30} />
                        <p className='font-semibold'>{content}</p>
                    </div>
                    <div className="flex gap-1 mt-1">
                        <Input classNames={{ inputWrapper:"p-0",input: "text-center text-[8px]", base: "w-8 no-arrows ", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ inputWrapper:"p-0",input: "text-center text-[8px]", base: "w-8 no-arrows ", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ inputWrapper:"p-0",input: "text-center text-[8px]", base: "w-8 no-arrows ", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ inputWrapper:"p-0",input: "text-center text-[8px]", base: "w-8 no-arrows ", helperWrapper: "text-center" }} size='sm' description="kg" variant='bordered' type='number' />
                    </div>
                </div>
                <div className="ml-auto mt-8">
                <SimpleCounter/>
                </div>
            </CardBody>
        </Card>
    )
}