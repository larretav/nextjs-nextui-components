import { EcommercePlatforms } from "./ecommerce-platform.type"
import { ShipmentStatus } from "./shipments.types"

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
    client: string,
    origin: string,
    destination: string,
    cost: number,
    status: ShipmentStatus,
    shipmentItems: ShipmentItem[]
  }