import React from 'react'


const statusStyles = {
    pending: {
        textColor: 'text-amber-600',
        bgColor: 'bg-amber-100',
        text: 'Pendiente',
    },
    paid: {
        textColor: 'text-green-600',
        bgColor: 'bg-green-100',
        text: 'Pagado',
    },
    canceled: {
        textColor: 'text-red-600',
        bgColor: 'bg-red-200',
        text: 'Cancelado',
    },
};
type Props = {
    status: "pending" | "paid" | "canceled"
}

export default function InvoiceStatus({ status }: Props) {
    const { textColor, bgColor, text } = statusStyles[status] || {
        textColor: 'text-gray-600',
        bgColor: 'bg-gray-100',
        text: 'Desconocido', // Fallback text for unexpected status
    };
    return (
        <div className={`${bgColor} rounded-xl p-1 w-min h-min ml-auto`}>
            <p className={`${textColor} capitalize text-xs`}>{text}</p>
        </div>
    )
}