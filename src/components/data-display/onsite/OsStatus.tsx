import React from 'react'
import type {ShipmentStatus} from "@/types/shipments.types"
import { Status } from './Status'
type Props = {
    status: ShipmentStatus
}
type StatusColor = "warning" | "blue" | "success" | "default" | "primary" | "secondary" | "danger" | undefined;

const statusOptions: Record<ShipmentStatus, { color: StatusColor }> = {
  "en sitio": { color: "warning" },
  "en tránsito": { color: "blue" },
  "entregado": { color: "success" },
  "cancelado": { color: "danger" },
  "cancelada": { color: "danger" },
};
export default function OsStatus({status}: Props) {
    const {color} = statusOptions[status] 
  return (
   <Status  color={color}><span className='capitalize'>{status}</span></Status>
  )
}