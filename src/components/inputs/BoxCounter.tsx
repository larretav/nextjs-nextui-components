"use client"
import React, { useState } from 'react'
import { Badge } from '@nextui-org/badge'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Button } from '@nextui-org/button'
export default function BoxCounter() {
    const [count, setCount] = useState(0)
    return (
        <div className='flex items-center gap-1'>
            <Button isIconOnly size='sm' radius='full' variant='flat'
                onPress={() => count <= 0 ? setCount(0) : setCount(count - 1)}
            >
                <FaMinus className='text-slate-500 dark:text-slate-200' size={8} />
            </Button>
            <div className="flex w-16 h-16 bg-slate-200 dark:bg-slate-500  justify-center items-center rounded-2xl">
                <Badge content={count} classNames={{ badge: "top-7 right-6 bg-blue-500 border-0 text-white" }} size='lg' variant='solid'>
                    <Image src="/assets/package-type/box.png" alt='caja' width={50} height={50} className='p-1' />
                </Badge>
            </div>
            <Button isIconOnly size='sm' radius='full' variant='flat'
                onPress={() => setCount(count + 1)}
            >
                <FaPlus className='text-slate-500 dark:text-slate-200' size={8}
                />
            </Button>
        </div>
    )
}