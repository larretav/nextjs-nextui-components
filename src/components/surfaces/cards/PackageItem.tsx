"use client"
import PackageType from '@/components/data-display/onsite/PackageType'
import { Card, CardBody } from '@nextui-org/card'
import { Input } from "@nextui-org/input";
import { FaMinus, FaPlus } from "react-icons/fa6";
import React, { useState } from 'react'
import { Button } from '@nextui-org/button';

type Props = {
    content: string,
    packageType: "box" | "envelope" | "pallet",
}

export default function PackageItem({ content, packageType }: Props) {
    const [count, setCount] = useState(0)
    console.log(count)
    return (
        <Card >
            <CardBody className='flex-row'>
                <div className="flex flex-col justify-center ">
                    <div className="flex gap-2 items-center">
                        <PackageType type={packageType} width={30} height={30} />
                        <p className='font-semibold'>{content}</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <Input className='w-12' size='sm' description="cm" variant='bordered' type='number' />
                        <Input className='w-12' size='sm' description="cm" variant='bordered' type='number' />
                        <Input className='w-12' size='sm' description="cm" variant='bordered' type='number' />
                        <Input className='w-12' size='sm' description="kg" variant='bordered' type='number' />
                    </div>
                </div>
                <div className="flex flex-col ml-auto justify-center">
                    <div className="flex items-center gap-2">
                        <Button isIconOnly size='sm' radius='full' className='bg-gray-50'                        >
                            <FaMinus className='text-slate-500'
                                onClick={() => {
                                    count <= 0 ? setCount(0) : setCount(count - 1)
                                }}
                            />
                        </Button>
                        <Input variant='faded' size='sm' className='w-14' type='number'
                            value={count.toString()}
                            onChange={(e) => setCount(Number(e.target.value))}
                        />
                        <Button isIconOnly size='sm' radius='full' className='bg-gray-50'>
                            <FaPlus className='text-slate-500'
                                onClick={() => setCount(count + 1)}
                            />
                        </Button>
                    </div>
                    <Button color='danger' size='sm' variant='light' className='font-medium'
                        onClick={() => setCount(0)}
                    >
                        Remover
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}