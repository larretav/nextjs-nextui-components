import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import BoxBadge from '@/components/data-display/badge/BoxBadge'
import React from 'react'
import { FaMoneyBillTransfer, FaMoneyBillWave, FaRegCreditCard } from 'react-icons/fa6'
import { Button } from '@nextui-org/button'


type paymentMethods = "card" | "cash" | "transfer"
type Props = {
    title: string,
    description: string,
    cost: number,
    badgeQuantity: number
    paymentMethods: paymentMethods[]
    highlighted?: boolean
}
const paymentMethodsOptions = {
    cash: {
        icon: <FaMoneyBillWave className='w-7 h-7 text-slate-700 dark:text-slate-200' />,
        text: "Efectivo"
    },
    transfer: {
        icon: <FaMoneyBillTransfer className='w-7 h-7 text-slate-700 dark:text-slate-200' />,
        text: "Transferencia"
    },
    card: {
        icon: <FaRegCreditCard className='w-7 h-7 text-slate-700 dark:text-slate-200' />,
        text: "Tarjeta"
    }
}
export default function RechargeDesktopCard({ title, description, cost, paymentMethods = [],highlighted }: Props) {
    return (
        <Card className={`shadow-md w-72 ${highlighted ? "border-2 border-emerald-500 "  : ""}`}>
            <CardHeader className='justify-center flex-col'>
                <BoxBadge quantity={1} boxSize={40} padding="md" badgeSize='lg' />
                <p className='text-5xl font-semibold py-4'><span className='text-2xl'>$</span>{cost}</p>
                <span className='w-14 flex bg-green-500 h-2 rounded-lg'></span>                
            </CardHeader>
            <CardBody className='items-center'>
                <p className='text-2xl font-medium'>{title}</p>
                <p className='py-1'>{description}</p>
                <p className='py-2'>Métodos de pagos disponibles</p>
                <div className="flex flex-col gap-3">
                    {paymentMethods.map((method,index) =>(
                        <div key={method+index} className='flex gap-2'>
                        {paymentMethodsOptions[method].icon}
                            <p className='font-medium'>{paymentMethodsOptions[method].text}</p> 
                        </div>
                        ))}
                </div>
            </CardBody>
            <CardFooter>
            {highlighted
                    ? <Button className='w-full text-white bg-emerald-600 font-semibold' variant='solid'>Recargar</Button>
                    : <Button className='w-full text-emerald-600 border-emerald-600 font-semibold' variant='flat'>Recargar</Button>}
            </CardFooter>
        </Card>
    )
}