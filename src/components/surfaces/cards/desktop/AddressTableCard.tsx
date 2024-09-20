import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import React from 'react'
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6'

type Props = {
  address: string,
  postalCode: string,
  location: string,
  country: string,
  className?:string
}

export default function AddressTableCard({ address, postalCode, location, country,className }: Props) {
  return (
    <Card className={'shadow-sm min-h-28 ' + className}>
      <CardBody className='flex-row py-4 scrollbar-hide'>
        <div className='flex flex-col  ml-3'>
          <p className="font-semibold">{address}</p>
          <p className="text-xs font-medium">{location}, {country}, {postalCode}</p>
        </div>
      </CardBody>
        <CardFooter className='ml-2'>
          <Button isIconOnly size='sm' variant='light' radius='full'>
            <FaPenToSquare className='text-blue-600' size={16} />
          </Button>
          <Button isIconOnly size='sm' variant='light' radius='full'>
            <FaTrashCan className='text-red-500' size={16} />
          </Button>
        </CardFooter>
    </Card>
  )
}