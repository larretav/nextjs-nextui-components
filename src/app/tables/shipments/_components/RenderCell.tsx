import { IconEcommerce, ShipperType } from "@/components";
import OsStatus from "@/components/data-display/onsite/OsStatus";
import { ShipmentOrder } from "@/types/shipment-order.type";
import { DateFormatter } from "@internationalized/date";
import { Button } from "@nextui-org/button";
import { Key } from "react";
import { FaEye } from "react-icons/fa6";

// Date Formatter
const formatter = new DateFormatter('es-MX', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  
  interface RenderCellProps {
    item: ShipmentOrder;
    columnKey: Key;
    toggleDetails: (isOpen: boolean) => void
    selectShipmentOrder: (shipmentOrder: ShipmentOrder) => void
  }
  
   const RenderCell = ({ item, columnKey,toggleDetails,selectShipmentOrder }: RenderCellProps) => {
  
  
    switch (columnKey) {
      case "orden":
        return (
          <div className="flex gap-2 items-center">
            <div className="rounded-xl bg-default-200">
              <IconEcommerce className="w-8 h-8" ecommerce={item.ecommercePlatform} />
            </div>
            <span>#{item.orderId}</span>
          </div>
        );
      case "fecha":
        return formatter.format(new Date(item.date));
      case "cliente":
        return item.customer;
      case "origen-destino":
        return `${item.origin} - ${item.destination}`;
      case "costo":
        return `$${item.cost.toFixed(2)}`;
      case "estatus":
        return <OsStatus status={item.status} />;
      case "alianza":
        return <ShipperType shipper={item.shipper} />;
      case "acciones":
        return (
          <Button isIconOnly radius="full" size="sm" variant="light"
            onPress={() => {
              selectShipmentOrder(item);
              toggleDetails(true);
            }}
          >
            <FaEye size={16} className="text-blue-500" />
          </Button>
        );
      default:
        return item["orderId"];
    }
  };

  export default RenderCell