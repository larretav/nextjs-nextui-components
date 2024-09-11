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
                    <div className="flex gap-2 mt-2 ">
                        <Input classNames={{ input: "text-center", base: "w-12 no-arrows", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ input: "text-center", base: "w-12 no-arrows", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ input: "text-center", base: "w-12 no-arrows", helperWrapper: "text-center" }} size='sm' description="cm" variant='bordered' type='number' />
                        <Input classNames={{ input: "text-center", base: "w-12 no-arrows", helperWrapper: "text-center" }} size='sm' description="kg" variant='bordered' type='number' />
                    </div>
                </div>
                <div className="flex flex-col ml-auto justify-center gap-2">
                    <div className="flex items-center gap-2">
                        <Button isIconOnly size='sm' radius='full' variant='faded'
                            onPress={() => { count <= 0 ? setCount(0) : setCount(count - 1) }}                       >
                            <FaMinus className='text-slate-500 dark:text-slate-200' size={14}
                            />
                        </Button>
                        <Input variant='faded' size='sm' className='w-14 no-arrows' type='number' classNames={{ input: "text-center" }}
                            value={count.toString()}
                            onChange={(e) => setCount(Number(e.target.value))}
                        />
                        <Button isIconOnly size='sm' radius='full' variant='faded' onPress={() => setCount(count + 1)}>
                            <FaPlus className='text-slate-500 dark:text-slate-200' size={14}
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
