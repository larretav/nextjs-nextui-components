/**
 * Mapper for service
 * https://cc.paquetexpress.com.mx/ptxws/rest/api/v1/guia/historico/ultimoevento/${trackingNumber}/@1@2@3@4@5?
 */
class DeliveryEvent {
    constructor(
        public date: string, // "fecha"
        public time: string, // "hora"
        public branch: string, // "sucursal"
        public status: string, // "status"
        public eventId: string, // "eventoId"
        public eventDescription: string, // "eventoDescripcion"
        public eventImage: string, // "eventoImagen"
        public originBranch: string, // "sucursalOrigen"
        public promiseDate: string, // "promesa"
        public destinationCity: string, // "ciudadDestino"
        public eventCity: string, // "ciudadEvento"
        public trackingCode: string, // "guia"
        public trackingNumber: string, // "rastreo"
        public reference: string, // "referencia"
        public deliveryType: string, // "tipoEntrega"
        public eventTimestamp: number, // "fechahora"
        public destinationBranch: string // "sucursalDestino"
    ) { }

}

// Define the interface for the response data
interface ApiResponse {
    data: DeliveryEvent;
}

// Define the MappedResponse class
export class PaqueteExpressDeliveryMapper {
    data: DeliveryEvent;

    constructor(mappedData: ApiResponse) {
        this.data = mappedData.data;
    }

    // Static method to map the response and return MappedResponse instance
    static fromResponse(response: any): PaqueteExpressDeliveryMapper {
        const mappedData: ApiResponse = {
            data: new DeliveryEvent(
                response.fecha, // date
                response.hora, // time
                response.sucursal, // branch
                response.status, // status
                response.eventoId, // eventId
                response.eventoDescripcion, // eventDescription
                response.eventoImagen, // eventImage
                response.sucursalOrigen, // originBranch
                response.promesa, // promiseDate
                response.ciudadDestino, // destinationCity
                response.ciudadEvento, // eventCity
                response.guia, // trackingCode
                response.rastreo, // trackingNumber
                response.referencia, // reference
                response.tipoEntrega, // deliveryType
                response.fechahora, // eventTimestamp
                response.sucursalDestino // destinationBranch
            )
        };

        return new PaqueteExpressDeliveryMapper(mappedData);
    }

    get getDate(): string {
        const date = new Date(this.data.eventTimestamp)
        let day = date.toLocaleString('es-MX', { weekday: 'long' })
        day = day.charAt(0).toUpperCase() + day.slice(1)

        return `${day},${this.data.date}`
    }
    get getTime(): string {
        const date = new Date(this.data.eventTimestamp)
        const hour = date.toLocaleString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true, second: 'numeric' })
        return `${hour}`
    }
}
