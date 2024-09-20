import { EcommercePlatforms } from "./ecommerce-platform.type"
import { ShipmentStatus } from "./shipments.types"
import {Shippers} from "./shippers.type"
type ShipmentItem = {
    title: string,
    subTitle: string,
    dimensions: string,
    quantity: number
  }
export type ShipmentOrder = {
    ecommercePlatform: EcommercePlatforms,
    orderId: number,
    date: string,
    customer: string,
    origin: string,
    destination: string,
    cost: number,
    status: ShipmentStatus,
    shipper: Shippers,
    shipmentItems: ShipmentItem[]
  }