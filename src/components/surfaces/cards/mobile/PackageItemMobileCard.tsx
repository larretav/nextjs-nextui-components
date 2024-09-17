"use client"
import PackageType from '@/components/data-display/onsite/PackageType'
import { Card, CardBody } from '@nextui-org/card'
import { Input } from "@nextui-org/input";
import React from 'react'
import SimpleCounter from '@/components/inputs/SimpleCounter';
import { Divider } from '@nextui-org/divider';

type Props = {
    content: string,
    packageType: "box" | "envelope" | "pallet",
}

export default function PackageItemMobileCard({ content, packageType }: Props) {
    return (
        <Card className='shadow-sm' >
            <CardBody className='flex-row gap-2 items-center'>
                <div className="flex flex-col gap-2 justify-center">
                    <div className="flex gap-2 items-center">
                        <PackageType type={packageType} width={30} height={30} />
                        <span className='font-semibold'>{content}</span>
                    </div>
                    <div className="flex flex-nowrap gap-1 mt-1">
                        <Input classNames={{ inputWrapper: "p-0", input: "text-center text-xs", base: " no-arrows ", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ inputWrapper: "p-0", input: "text-center text-xs", base: " no-arrows ", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ inputWrapper: "p-0", input: "text-center text-xs", base: " no-arrows ", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ inputWrapper: "p-0", input: "text-center text-xs", base: " no-arrows ", helperWrapper: "text-center" }} size='sm' description="kg" variant='bordered' type='number' />
                    </div>
                </div>
                <Divider orientation="vertical" className="h-3/5" />
                <div className="pt-8 ml-auto">
                    <SimpleCounter />
                </div>               
            </CardBody>

        </Card>
    )
}