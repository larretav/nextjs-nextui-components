"use client"
import React, { useState } from 'react'
import { Badge } from "@heroui/badge"
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Button } from "@heroui/button"
export default function BoxCounter() {
    const [count, setCount] = useState(0)
    return (
        <div className='flex gap-1 items-center'>
            <Button isIconOnly size='sm' radius='full' variant='flat'
                onPress={() => count <= 0 ? setCount(0) : setCount(count - 1)}
            >
                <FaMinus className='text-slate-500 dark:text-slate-200' size={8} />
            </Button>
            <div className="flex justify-center items-center w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-500">
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