export class Address {
    id: number; // "id"
    street: string; // "calle"
    exteriorNumber: string; // "noext"
    interiorNumber: string; // "noint"
    neighborhood: string; // "colonia"
    postalCode: string; // "cp"
    locality: string; // "localidad"
    state: string; // "estado"
    clientId: number; // "idcliente"
    country: string; // "pais"
    email: string; // "correo"
    phone: string; // "telefono"
    isMainAddress: string; // "original"
    municipality: string; // "municipio"
    advisorId: number; // "idasesor"
    actions: string | null; // "acciones"
    buttons: string; // "buttons"
    buttonSelect: string; // "buttonSelect"
    functionSelect: string; // "functionSelect"

    constructor(data: any) {
        this.id = data.id;
        this.street = data.calle;
        this.exteriorNumber = data.noext;
        this.interiorNumber = data.noint;
        this.neighborhood = data.colonia;
        this.postalCode = data.cp;
        this.locality = data.localidad;
        this.state = data.estado;
        this.clientId = data.idcliente;
        this.country = data.pais;
        this.email = data.correo;
        this.phone = data.telefono;
        this.isMainAddress = data.original;
        this.municipality = data.municipio;
        this.advisorId = data.idasesor;
        this.actions = data.acciones;
        this.buttons = data.buttons;
        this.buttonSelect = data.buttonSelect;
        this.functionSelect = data.functionSelect;
    }

    // Getter methods
    get getFullAddress(): string {
        return `${this.street} ${this.interiorNumber ? this.interiorNumber + '/' : ''}${this.exteriorNumber}, ${this.neighborhood}, ${this.locality}, ${this.state}, ${this.postalCode}, ${this.country}`;
    }
}

export class CustomerAddressListMapper {
    key: string; // "key"
    isError: boolean; // "isError"
    message: string; // "Message"
    totalRecords: number; // "totalRecords"
    data: Address[]; // "data"

    constructor(key: string, isError: boolean, message: string, totalRecords: number, data: Address[]) {
        this.key = key;
        this.isError = isError;
        this.message = message;
        this.totalRecords = totalRecords;
        this.data = data;
    }

    static fromJson(json: any): CustomerAddressListMapper {
        const addresses: Address[] = json.data.map((addressData: any) => new Address(addressData));
        return new CustomerAddressListMapper(json.key, json.isError, json.Message, json.totalRecords, addresses);
    }
}

