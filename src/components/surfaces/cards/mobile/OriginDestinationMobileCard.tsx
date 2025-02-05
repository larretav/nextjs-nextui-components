"use client"
import React from 'react'
import { Card, CardHeader, CardFooter, CardBody } from "@heroui/card"
import { RiUserSearchFill } from "react-icons/ri";
import { MdNotListedLocation } from "react-icons/md";
import { Button } from "@heroui/button";

type Props = {
    title: string,
    postalCode: string
    address: string
}

export default function OriginDestinationMobileCard({ title, postalCode, address }: Props) {
    return (
        <Card className='px-3 w-min'>
            <CardHeader className='p-0 py-2'>
                <div className="flex gap-2 items-center">
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
                <p className='p-3 text-4xl rounded-xl border-2 font-base'>{postalCode}</p>
            </CardBody>
            <CardFooter className='px-2 pb-4'>
                <p className='py-1 text-sm font-medium'>{address}</p>
            </CardFooter>
        </Card>
    )
}