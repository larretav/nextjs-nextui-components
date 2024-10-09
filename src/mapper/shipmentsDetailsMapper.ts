/**
 * Mapper for service
 * https://onsite.pktuno.mx/ws2//Api/DocOS/obtenerDetallesDoc/a15df564-22f4-11eb-860f-00505632f3b46212?id=${OrderID}
 */
export class ShipmentDetailsItem {
    constructor(
        public id: number,
        public deliveryId: number, // "identrega"
        public documentId: number, // "iddoc"
        public trackingNumber: string | null, // "norastreo"
        public quantity: number, // "cantidad"
        public content: string, // "contenido"
        public type: string, // "tipo"
        public length: number, // "largo"
        public width: number, // "ancho"
        public height: number, // "alto"
        public weight: number, // "peso"
        public volumetricWeight: number, // "pesovolumetrico"
        public productSatId: string, // "productidsat"
        public productSatDescription: string, // "productdescsat"
        public allianceName: string | null, // "nombrealianza"
        public clientFolio: number, // "foliocliente"
        public date: string | null, // "fecha"
        public destination: string | null, // "Destino"
        public username: string | null // "nombreusuario"
    ) {}

    get getWeightMeasures(): string {
        return `${this.length}x${this.height}x${this.width}x${this.weight}kg`;
    }

    get getType(): "box"|"envelope"|"pallet" {
        switch (this.type) {
          case "Paquete":
            return "box";
          case "Sobre":
            return "envelope";
          case "Tarima":
            return "pallet";
          default:            
            return "box";
        }
      }
}

// Define the interface for the complete response
interface ApiResponse {
    key: string;
    isError: boolean;
    Message: string;
    totalRecords: number;
    data: ShipmentDetailsItem[];
}

// Define the MappedResponse class
export class ShipmentDetailsMapper {
    key: string;
    isError: boolean;
    Message: string;
    totalRecords: number;
    data: ShipmentDetailsItem[];

    constructor(mappedData: ApiResponse) {
        this.key = mappedData.key;
        this.isError = mappedData.isError;
        this.Message = mappedData.Message;
        this.totalRecords = mappedData.totalRecords;
        this.data = mappedData.data;
    }

    // Static method to map the response and return MappedResponse instance
    static fromResponse(response: any): ShipmentDetailsMapper {
        const mappedData: ApiResponse = {
            key: response.key,
            isError: response.isError,
            Message: response.Message,
            totalRecords: response.totalRecords,
            data: response.data.map((item: any) => new ShipmentDetailsItem(
                item.id,
                item.identrega, // deliveryId
                item.iddoc, // documentId
                item.norastreo, // trackingNumber
                item.cantidad, // quantity
                item.contenido, // content
                item.tipo, // type
                item.largo, // length
                item.ancho, // width
                item.alto, // height
                item.peso, // weight
                item.pesovolumetrico, // volumetricWeight
                item.productidsat, // productSatId
                item.productdescsat, // productSatDescription
                item.nombrealianza, // allianceName
                item.foliocliente, // clientFolio
                item.fecha, // date
                item.Destino, // destination
                item.nombreusuario // username
            ))
        };

        return new ShipmentDetailsMapper(mappedData);
    }

    // Example get method for the total records
}
