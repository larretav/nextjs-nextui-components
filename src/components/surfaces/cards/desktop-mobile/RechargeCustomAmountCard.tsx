import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Input } from '@nextui-org/input'

import React from 'react'
import { MdAttachMoney } from 'react-icons/md'

type Props = {
    title: string    
    highlighted?: boolean    
}

export default function RechargeCustomAmountMobileCard({ title,highlighted }: Props) {
    return (
        <Card className={`px-2 h-min max-w-72`}>
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