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
    <Card className='pr-14 w-min'>
        <CardBody className='flex-row gap-2 p-5 sm:flex-col'>
            <div className="flex mr-2">
                <FaMapLocationDot className="self-center text-yellow-400" size={50}/>
            </div>
            <div className="flex flex-col">
                <p className='-mb-2 font-semibold text-default-500'>{text}</p>
                <p className='text-4xl font-bold sm:text-5xl'>{quantity}</p>
            </div>
        </CardBody>
    </Card>
  )
}