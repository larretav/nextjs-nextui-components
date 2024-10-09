/**
 * Mapper for service
 * https://onsite.pktuno.mx/ws2/Api/Contactos
 */
class Documenter {
    constructor(
        public id: number,
        public clientId: number, // "idcliente"
        public clientName: string, // "nombrecliente"
        public username: string, // "nombreusuario"
        public source: string, // "origen"
        public status: number, // "estatus"
        public name: string, // "nombre"
        public postalCode: string, // "cp"
        public locality: string, // "localidad"
        public state: string, // "estado"
        public country: string, // "pais"
        public roleId: number, // "idrol"
        public role: string // "rol"
    ) {}

}

// Define the interface for the response data
interface ApiResponse {
    data: Documenter[];
}

// Define the MappedResponse class
export class ShipmentsDocumenterMapper {
    data: Documenter[];

    constructor(mappedData: ApiResponse) {
        this.data = mappedData.data;
    }

    // Static method to map the response and return MappedResponse instance
    static fromResponse(response: any): ShipmentsDocumenterMapper {
        const mappedData: ApiResponse = {
            data: response.map((item: any) => new Documenter(
                item.id,
                item.idcliente, // clientId
                item.nombrecliente, // clientName
                item.nombreusuario, // username
                item.origen, // source
                item.estatus, // status
                item.nombre, // name
                item.cp, // postalCode
                item.localidad, // locality
                item.estado, // state
                item.pais, // country
                item.idrol, // roleId
                item.rol // role
            ))
        };

        return new ShipmentsDocumenterMapper(mappedData);
    }
}
