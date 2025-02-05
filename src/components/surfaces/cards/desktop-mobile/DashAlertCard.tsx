"use client"
import { Card } from "@heroui/card";
import React from 'react'
import { SiCashapp } from "react-icons/si";
import { FaFileInvoice } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
type Props = {
    size: "sm" | "md"
    type: "pendingRecharge" | "lowCreditPkt1" | "lowCredit" | "invoices" | "congrats"
}

const typeOptions = {
    pendingRecharge: {
        text: "Tienes Recargas Pendientes",
        bgColor: "bg-violet-50 dark:bg-violet-500",
        textColor: "text-violet-900 dark:text-violet-100",
        iconMd: <SiCashapp className='text-violet-500 dark:text-violet-100' size={50}/>,
        iconSm: <SiCashapp className='text-violet-500 dark:text-violet-100' size={25}/>
    },
    lowCreditPkt1: {
        text: "¡Tu crédito PKT1 se agota!",
        bgColor: "bg-amber-50 dark:bg-amber-500",
        textColor: "text-amber-900 dark:text-amber-100",
        iconMd: <FaMoneyCheckDollar className='text-amber-500 dark:text-amber-100' size={50}/>,
        iconSm: <FaMoneyCheckDollar className='text-amber-500 dark:text-amber-100' size={25}/>
    },
    lowCredit: {
        text: "¡El saldo de tu cuenta se agota!",
        bgColor: "bg-amber-50 dark:bg-amber-500",
        textColor: "text-amber-900 dark:text-amber-100",
        iconMd: <FaMoneyCheckDollar className='text-amber-500 dark:text-amber-100' size={50}/>,
        iconSm: <FaMoneyCheckDollar className='text-amber-500 dark:text-amber-100' size={25}/>
    },
    invoices: {
        text: "Tienes facturas que están por vencer",
        bgColor: "bg-teal-50 dark:bg-teal-500",
        textColor: "text-teal-900 dark:text-teal-100",
        iconMd: <FaFileInvoice className='text-teal-500 dark:text-teal-100' size={50}/>,
        iconSm: <FaFileInvoice className='text-teal-500 dark:text-teal-100' size={25}/>
    },
    congrats: {
        text: "¡Felicidades, estás al día",
        bgColor: "bg-green-50 dark:bg-green-500",
        textColor: "text-green-900 dark:text-green-100",
        iconMd: <FaCheckCircle className='text-green-500 dark:text-green-100' size={50}/>,
        iconSm: <FaCheckCircle className='text-green-500 dark:text-green-100' size={25}/>
    }
}
export default function DashAlertCard({size,type }: Props) {
    const {text,bgColor,textColor,iconMd,iconSm} = typeOptions[type]
    return (
        <Card className={`h-min p-0 justify-center px-2 pl-4 ${bgColor} ${size === "md"?"py-4":"py-2"}`}>
            <div className='flex gap-2 items-center'>
                <div>{size === "md"? iconMd:iconSm}</div>
                <div className={`${textColor} ${size == "md"?"text-2xl":"text-base"} font-semibold`}>{text}</div>
            </div>
        </Card>
    )
}
