"use client"
import React from 'react'
import { Card, CardBody } from "@heroui/card";
import { FaMapLocationDot } from "react-icons/fa6";
type Props = {
    type: "en sitio" | "en transito" | "entregados" | "cancelados"
    quantity: number
}
const typeOptions = {
    "en sitio": {
        text: "En sitio",
        icon: <FaMapLocationDot className="self-center text-yellow-400" size={50} />
    },
    "en transito": {
        text: "En tránsito",
        icon: <FaMapLocationDot className="self-center text-blue-500" size={50} />
    },
    "entregados": {
        text: "Entregados",
        icon: <FaMapLocationDot className="self-center text-green-500" size={50} />
    },
    "cancelados": {
        text: "Cancelados",
        icon: <FaMapLocationDot className="self-center text-red-500" size={50} />
    }
}

export default function DashboardCard({ type, quantity }: Props) {
    const {text,icon} = typeOptions[type]
    return (
        <Card className='pr-14 w-min shadow-sm'>
            <CardBody className='flex-row gap-2 p-5 sm:flex-col'>
                <div className="flex mr-2">
                    {icon}
                </div>
                <div className="flex flex-col gap-2">
                    <p className='-mb-2 font-semibold text-zinc-600 text-nowrap'>{text}</p>
                    <p className='text-4xl font-bold sm:text-5xl'>{quantity}</p>
                </div>
            </CardBody>
        </Card>
    )
}