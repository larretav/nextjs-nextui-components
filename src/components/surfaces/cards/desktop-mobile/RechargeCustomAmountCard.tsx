import { Button } from "@heroui/button"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import { Input } from "@heroui/input"

import React from 'react'
import { MdAttachMoney } from 'react-icons/md'

type Props = {
    title: string    
    highlighted?: boolean    
}

export default function RechargeCustomAmountMobileCard({ title,highlighted }: Props) {
    return (
        <Card className="px-2 shadow-md h-min max-w-72">
            <CardHeader>
                <p className='mt-5 text-xl font-semibold'>{title}</p>
            </CardHeader>
            <CardBody>
                <Input startContent={<MdAttachMoney />} />
            </CardBody>
            <CardFooter>
                {highlighted
                    ? <Button className='w-full font-semibold text-white bg-emerald-600' variant='solid'>Recargar</Button>
                    : <Button className='w-full font-semibold text-emerald-600 border-emerald-600' variant='flat'>Recargar</Button>}
            </CardFooter>
        </Card>
    )
}