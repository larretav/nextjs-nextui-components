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
        <Card className='px-2 h-min'>
            <CardHeader>
                <p className='font-semibold text-xl mt-5'>{title}</p>
            </CardHeader>
            <CardBody>
                <Input startContent={<MdAttachMoney />} />
            </CardBody>
            <CardFooter>
                {highlighted
                    ? <Button className='w-full text-white bg-emerald-600 font-semibold' variant='solid'>Recargar</Button>
                    : <Button className='w-full text-emerald-600 border-emerald-600 font-semibold' variant='flat'>Recargar</Button>}
            </CardFooter>
        </Card>
    )
}