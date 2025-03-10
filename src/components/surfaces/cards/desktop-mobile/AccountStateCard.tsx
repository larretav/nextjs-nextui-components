import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import React from 'react'
import { IoIosAlert } from "react-icons/io";
import { MdOutlineSdCardAlert } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

type Props = {
  type: "pending" | "expired" | "congrats"
  amount?: number
  date?: string //eventualmente será type Date
}

const cardTypes = {
  pending: {
    text: "Tienes una factura pendiente de:",
    datePrefix: "Vence",
    textColor: "text-violet-600 dark:text-violet-50",
    bgColor: "bg-violet-50 dark:bg-violet-600",
    icon: <IoIosAlert className='text-violet-600 dark:text-violet-100' size={60}/>
  },
  expired: {
    text: "Tienes una factura vencida de:",
    datePrefix: "Venció el",
    textColor: "text-red-600 dark:text-red-100",
    bgColor: "bg-red-50 dark:bg-red-600",
    icon: <MdOutlineSdCardAlert className='text-red-600 dark:text-red-100' size={60}/>

  },
  congrats: {
    text: "¡Felicidades!",
    datePrefix: "",
    textColor: "text-green-600 dark:text-green-100",
    bgColor: "bg-green-50 dark:bg-green-600",
    icon: <FaCheckCircle className='text-green-600 dark:text-green-100' size={60}/>

  }
}
export default function AccountStateCard({ type, date, amount }: Props) {
  const { text, textColor, bgColor, datePrefix,icon } = cardTypes[type]
  return (
    <Card className={`${bgColor} ${textColor}`}>
      
      <CardBody className='flex-row pb-0'>
        <div className="flex py-2 pr-2">     
          {icon}
        </div>
        <div>
        <p className='font-medium'>{text}</p>
        {type === "congrats" && <div className='flex flex-col'>
            <p className='text-2xl font-bold'>Tus cuentas están al día</p>
            <p className='text-sm'>Valoramos tu compromiso en mantener tus saldos en orden</p>
          </div>}
          {type !== "congrats" && <p className='text-4xl font-bold'>${amount}</p>}
        </div>
      </CardBody>
      <CardFooter className='pt-0'>
        <div className='ml-auto text-nowrap'><span className='font-medium'>{datePrefix}</span> <span className='font-bold'> {date}</span></div>
      </CardFooter>
    </Card>
  )
}