import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import { RiAlertLine } from "react-icons/ri";
type Props = {
    severity: "success" | "info" | "warning" | "error",
    description: string,
    variant?: "default" | "filled"
    buttonText?: string
}

const severityOptions = {
    success: {
        defaultBgColor: "bg-green-100",
        filledBgColor: "bg-green-500",
        defaultTextColor: "text-black",
        filledTextColor: "text-white",
        buttonTextColor: "text-green-500",
        defaultIcon: <FaCheck size={20} className='text-green-500' />,
        filledIcon: <FaCheck size={20} className='text-white' />,
        defaultXIcon: <FaXmark size={20} className='text-green-500' />,
        filledXIcon: <FaXmark size={20} className='text-white' />,
    },
    info: {
        defaultBgColor: "bg-sky-100",
        filledBgColor: "bg-sky-500",
        defaultTextColor: "text-black",
        filledTextColor: "text-white",
        buttonTextColor: "text-sky-500",
        defaultIcon: <CiCircleAlert size={25} className='text-sky-500 ' />,
        filledIcon: <CiCircleAlert size={25} className='text-white' />,
        defaultXIcon: <FaXmark size={20} className='text-sky-500' />,
        filledXIcon: <FaXmark size={20} className='text-white' />,
    },
    warning: {
        defaultBgColor: "bg-amber-100",
        filledBgColor: "bg-amber-400",
        defaultTextColor: "text-black",
        filledTextColor: "text-white",
        buttonTextColor: "text-amber-400",
        defaultIcon: <RiAlertLine size={25} className='text-amber-400' />,
        filledIcon: <RiAlertLine size={25} className='text-white' />,
        defaultXIcon: <FaXmark size={20} className='text-amber-400' />,
        filledXIcon: <FaXmark size={20} className='text-white' />,
    },
    error: {
        defaultBgColor: "bg-red-100",
        filledBgColor: "bg-red-500",
        defaultTextColor: "text-black",
        filledTextColor: "text-white",
        buttonTextColor: "text-red-500",
        defaultIcon: <CiCircleAlert size={25} className='text-red-500' />,
        filledIcon: <CiCircleAlert size={25} className='text-white' />,
        defaultXIcon: <FaXmark size={20} className='text-red-500' />,
        filledXIcon: <FaXmark size={20} className='text-white' />,
    }
}
export default function AlertCard({ severity, description, variant = "default", buttonText = "Button" }: Props) {
    const { defaultBgColor, filledBgColor, defaultTextColor, filledTextColor, defaultIcon, filledIcon, defaultXIcon, filledXIcon, buttonTextColor } = severityOptions[severity]
    return (
        <Card className={`p-2 ${variant === "default" ? defaultBgColor : filledBgColor}`}>
            <div className='flex'>
                <div className="p-2 pr-4">{variant === "default" ? defaultIcon : filledIcon}</div>
                <div className={`${variant === "default" ? defaultTextColor : filledTextColor}`}>
                    <p className='font-bold'>Alerta</p>
                    <p >{description}</p>
                </div>
                <div className=" flex ml-auto items-center px-1 gap-1">
                    <Button size='sm'
                        variant={variant === "default" ? "light" : 'faded'}
                        className={`border-0 ${buttonTextColor}`}>
                        {buttonText}
                    </Button>
                    <Button isIconOnly size='sm' variant='light' radius='full'>
                        {variant === "default" ? defaultXIcon : filledXIcon}
                    </Button>
                </div>
            </div>
        </Card>
    )
}