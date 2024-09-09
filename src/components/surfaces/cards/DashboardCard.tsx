"use client"
import React from 'react'
import { Card, CardBody } from '@nextui-org/card';
import { FaMapLocationDot } from "react-icons/fa6";
type Props = {
    text:string,
    quantity:number
}

export default function DashboardCard({text,quantity}: Props) {
  return (
    <Card className='w-min pr-14'>
        <CardBody className='flex-row gap-2 p-5 sm:flex-col'>
            <div className="flex mr-2">
                <FaMapLocationDot className="self-center text-yellow-400" size={50}/>
            </div>
            <div className="flex flex-col">
                <p className='font-semibold text-default-500 -mb-2'>{text}</p>
                <p className='font-bold text-4xl sm:text-5xl'>{quantity}</p>
            </div>
        </CardBody>
    </Card>
  )
}