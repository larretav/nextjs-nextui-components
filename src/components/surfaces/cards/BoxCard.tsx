"use client"
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
type Props = {
    description: string,
    content: string,
    length: number,
    height: number,
    width: number,
    weight: number
}

export default function BoxCard({ description, content, length, height, width, weight }: Props) {
    const weightAndMeasures = `${length} X ${height} X ${width} - ${weight}kg`
    return (
        <Card>
            <CardBody>
                <div className="border-b mx-2">
                    <p className='text-base font-semibold'>{description}</p>
                    <p className='text-sm'>{content}</p>
                    <p className='text-xs font-semibold text-slate-400 mb-2'>{weightAndMeasures}</p>
                </div>
            </CardBody>
            <CardFooter className='justify-end gap-2 pt-0'>
                <Button isIconOnly className='bg-blue-100 dark:bg-blue-600/50'>
                    <FaEdit className='text-blue-600 dark:text-blue-100' size={18} />
                </Button>
                <Button isIconOnly className='bg-red-100 dark:bg-red-600/50'>
                    <FaTrashAlt className='text-red-500 dark:text-red-100' size={18} />
                </Button>
            </CardFooter>
        </Card>
    )
}