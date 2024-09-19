import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

type Props = {
  address:string,
  postalCode:string,
  location:string,
  country:string,
}

export default function AddressCard({address,postalCode,location,country}: Props) {
  return (
    <Card className='flex-row shadow-md min-h-24'>
    <CardBody className='flex-row py-4'>    
        <div className=' ml-3'>
            <p className="font-semibold">{address}</p>
            <p className="text-xs font-medium">{location}, {country}, {postalCode}</p>
        </div>
        <div className='flex  ml-auto gap-1'>
        <Button isIconOnly size='sm' radius='full' className='bg-blue-100 dark:bg-blue-600/50'>
                    <FaEdit className='text-blue-600 dark:text-blue-100' size={14} />
                </Button>
                <Button isIconOnly size='sm' radius='full' className='bg-red-100 dark:bg-red-600/50'>
                    <FaTrashAlt className='text-red-500 dark:text-red-100' size={14} />
                </Button>
        </div>
    </CardBody>
</Card>
  )
}