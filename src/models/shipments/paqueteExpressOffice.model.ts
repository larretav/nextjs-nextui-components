/**
 * Mapper for service
 * https://cc.paquetexpress.com.mx/ptxws/rest/api/v1/sucursal/${ShipmentOrderForcedOfficeKey}/@1@2@3@4@5?  *
 */

class Office {
    constructor(
        public code: string, // "clave"
        public name: string, // "nombre"
        public officeType: string, // "tipoSuc"
        public postalCode: string, // "codigoPostal"
        public neighborhood: string, // "colonia"
        public street: string, // "calle"
        public number: string, // "numero"
        public city: string, // "ciudad"
        public state: string, // "estado"
        public municipality: string, // "municipio"
        public country: string, // "pais"
        public phone1: string, // "telefono1"
        public phone2: string, // "telefono2"
        public phone3: string | null, // "telefono3"
        public phone4: string | null, // "telefono4"
        public phone5: string | null, // "telefono5"
        public latitude: string, // "localizaLatitud"
        public longitude: string, // "localizaLongitud"
        public schedule: string // "horario"
    ) {}
}

// Define the interface for the response data
interface ApiResponse {
    data: Office;
}

// Define the MappedResponse class
export class MappedPaqueteExpressOffice {
    data: Office;

    constructor(mappedData: ApiResponse) {
        this.data = mappedData.data;
    }

    // Static method to map the response and return MappedResponse instance
    static fromJson(response: any): MappedPaqueteExpressOffice {
        const mappedData: ApiResponse = {
            data: new Office(
                response.clave, // code
                response.nombre, // name
                response.tipoSuc, // officeType
                response.codigoPostal, // postalCode
                response.colonia, // neighborhood
                response.calle, // street
                response.numero, // number
                response.ciudad, // city
                response.estado, // state
                response.municipio, // municipality
                response.pais, // country
                response.telefono1, // phone1
                response.telefono2, // phone2
                response.telefono3, // phone3
                response.telefono4, // phone4
                response.telefono5, // phone5
                response.localizaLatitud, // latitude
                response.localizaLongitud, // longitude
                response.horario // schedule
            )
        };
        
        return new MappedPaqueteExpressOffice(mappedData);
    }
    get getAddress(): string {
        return `${this.data.street} ${this.data.number}, ${this.data.neighborhood}, C.P. ${this.data.postalCode}, ${this.data.city}, ${this.data.state}, ${this.data.country}`
    }

    get getPhones(): string {
        const phones = [this.data.phone1, this.data.phone2, this.data.phone3, this.data.phone4, this.data.phone5]
            .filter(phone => phone) 
            .join(', ');         
        return phones;
    }
}
