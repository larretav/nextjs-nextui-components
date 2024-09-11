import { RouteLineSolid } from '@/components/icons'
import React from 'react'
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6'

type Props = {
  origin: string,
  destination: string
}

const OriginDestination = ({ origin, destination }: Props) => {
  return (
    <div className="flex flex-col gap-px">
      <div className="flex gap-2 items-center">
        <FaLocationDot size={20} className="text-blue-500" />
        <span className="text-base font-semibold">{origin}</span>
      </div>

      <RouteLineSolid className="text-default-400"/>

      <div className="flex gap-2 items-center">
        <FaLocationDot size={16} className="text-zinc-500" />
        <span className="text-sm font-medium text-default-500">{destination}</span>
      </div>

    </div>
  )
}

export default OriginDestination