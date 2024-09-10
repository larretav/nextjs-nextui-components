"use client"
import React from 'react'
import { Card, CardHeader, CardFooter, CardBody } from '@nextui-org/card'
import { RiUserSearchFill } from "react-icons/ri";
import { MdNotListedLocation } from "react-icons/md";
import { Button } from '@nextui-org/button';

type Props = {
    title: string,
    postalCode: string
    address: string
}

export default function OriginDestinationCard({ title, postalCode, address }: Props) {
    return (
        <Card className='w-min px-3'>
            <CardHeader className='p-0 py-2'>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-default-400">{title}:</p>
                    <Button isIconOnly size='sm' radius='full' variant='light'>
                        <RiUserSearchFill className='text-default-600' size={18} />
                    </Button>
                    <Button isIconOnly size='sm' radius='full' variant='light'>
                        <MdNotListedLocation className='text-default-600' size={18} />
                    </Button>
                </div>
            </CardHeader>
            <CardBody className='justify-center items-center p-0'>
                <p className='border-2 rounded-xl p-3 text-4xl font-base'>{postalCode}</p>
            </CardBody>
            <CardFooter className='pb-4 px-2'>
                <p className='font-medium text-sm py-1'>{address}</p>
            </CardFooter>
        </Card>
    )
}