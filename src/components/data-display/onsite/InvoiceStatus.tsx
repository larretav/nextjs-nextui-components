import React from 'react'
import { Chip } from "@heroui/chip";

const statusStyles = {
    pending: {
        textColor: 'text-amber-600 dark:text-amber-300',
        bgColor: 'bg-amber-100 dark:bg-amber-500/30',
        text: 'Pendiente',
    },
    paid: {
        textColor: 'text-green-600 dark:text-green-300',
        bgColor: 'bg-green-100 dark:bg-green-500/30',
        text: 'Pagado',
    },
    canceled: {
        textColor: 'text-red-600 dark:text-red-300',
        bgColor: 'bg-red-200 dark:bg-red-500/30',
        text: 'Cancelado',
    },
};
type Props = {
    status: "pending" | "paid" | "canceled"
}

export default function InvoiceStatus({ status }: Props) {
    const { textColor, bgColor, text } = statusStyles[status]
    return (
        <>
            <Chip className={`${bgColor} ml-auto`}>
                <p className={`${textColor} capitalize text-xs`}>{text}</p>
            </Chip>
        </>
    )
}