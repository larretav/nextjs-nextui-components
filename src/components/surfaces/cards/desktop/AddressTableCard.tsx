import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import React from 'react'
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6'

type Props = {
  address: string,
  postalCode: string,
  location: string,
  country: string,
}

export default function AddressTableCard({ address, postalCode, location, country }: Props) {
  return (
    <Card className='flex-row shadow-sm min-h-28'>
      <CardBody className='flex-row py-4'>
        <div className='flex flex-col justify-center ml-3'>
          <p className="font-semibold">{address}</p>
          <p className="text-xs font-medium">{location}, {country}, {postalCode}</p>
        </div>
        <div className='flex flex-col gap-1 justify-center ml-auto'>
          <Button isIconOnly size='sm' variant='light' radius='full'>
            <FaPenToSquare className='text-blue-600' size={16} />
          </Button>
          <Button isIconOnly size='sm' variant='light' radius='full'>
            <FaTrashCan className='text-red-500' size={16} />
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}