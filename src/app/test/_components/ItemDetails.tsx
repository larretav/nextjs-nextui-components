import React from 'react'
import { User } from '../_utils/get-user-details'

type Props = {
  item: User
}


const ItemDetails = ({ item }: Props) => {
  return (
    <div className='w-full flex flex-col gap-2 bg-green-950 text-zinc-200 rounded-md'>
      <span>{ item.address.street}</span>
      <span>{ item.address.number}</span>
      <span>{ item.address.suburb}</span>
      <span>{ item.address.city}</span>
      <span>{ item.address.state}</span>
      <span>{ item.address.country}</span>
    </div>
  )
}

export default ItemDetails