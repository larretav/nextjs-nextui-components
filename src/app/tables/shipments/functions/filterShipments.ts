import { useShipmentTableStore } from "@/store/tables/shipment-table-store";
import { EcommercePlatforms, Shippers } from "@/types";
import { ShipmentOrder } from "@/types/shipment-order.type";
import { isSameDay, parseDateTime } from "@internationalized/date";

/**
 * Filtra una lista de órdenes de envío según los filtros seleccionados.
 *
 * ¿Por qué retorna dos listas?
 * - La primera lista (`filterByFilterWord`) contiene las órdenes filtradas hasta el punto en que se aplican
 *   los filtros generales (fecha, transportista, plataforma de ecommerce y búsqueda por palabra clave).
 *   Esta lista se utiliza para obtener un conteo de envíos antes de aplicar el filtro por estado (tabs).
 * - La segunda lista (`filterByStatus`) aplica un filtro adicional basado en el estado seleccionado en los tabs
 *   (por ejemplo, "En sitio", "En tránsito", "Entregado", "Cancelado").
 * 
 * @param {ShipmentOrder[]} shipmentOrders - Lista de órdenes de envío a filtrar.
 * @returns {Object} Un objeto con dos listas filtradas: `filterByFilterWord` y `filterByStatus`.
 */
export function filterShipments(shipmentOrders:ShipmentOrder[]){
    const selectedTabKey = useShipmentTableStore.use.selectedTabKey() as string
    const filterDate = useShipmentTableStore.use.filterDate()
    const filterShipper = useShipmentTableStore.use.filterShipper()
    const filterEcommercePlatform = useShipmentTableStore.use.filterEcommercePlatform()
    const filterWord = useShipmentTableStore.use.filterWord()

    const filteredByDate = shipmentOrders.filter((item) => {
        return isSameDay(parseDateTime(item.date), parseDateTime(filterDate)) ||
          new Date(item.date) > new Date(filterDate)
      })
      const filteredByShipper = filteredByDate.filter((item) => {
        if (filterShipper === "Todos" as Shippers) return item
        return item.shipper.toLowerCase().includes(filterShipper)
      })
      const filterByEcommercePlatform = filteredByShipper.filter((item) => {
        if (filterEcommercePlatform === "Todos" as EcommercePlatforms) return item
        return item.ecommercePlatform.toLowerCase().includes(filterEcommercePlatform)
      })
    
      const filterByFilterWord = filterByEcommercePlatform.filter((item) => {
        return item.customer.toLowerCase().includes(filterWord) ||
          item.orderId.toString().includes(filterWord.toLowerCase())
      })
    
      const filterByStatus = filterByFilterWord.filter((item) => {
        if (selectedTabKey === "Todos") return item
        return item.status.toLowerCase().includes(selectedTabKey.toLowerCase())
      })
    return {filterByFilterWord,filterByStatus}
}