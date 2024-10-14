export class Customer {
    id: number; // "id"
    internalCode: string; // "codigointerno"
    type: string; // "tipo"
    firstName: string; // "nombre"
    middleName: string; // "apellidom"
    lastName: string; // "apellidop"
    rfc: string; // "rfc"
    street: string; // "calle"
    interiorNumber: string; // "noint"
    exteriorNumber: string; // "noext"
    postalCode: string; // "cp"
    phone: string; // "telefono"
    city: string; // "ciudad"
    municipality: string; // "municipio"
    neighborhood: string; // "colonia"
    email: string; // "correo"
    addressType: string; // "tipodomicilio"
    registrationDate: string; // "fechaalta"
    credit: string; // "credito"
    check: string; // "cheque"
    active: string; // "activo"
    observation: string; // "observacion"
    franchiseId: number; // "idfranquicia"
    franchiseName: string | null; // "nombrefranquicia"
    country: string; // "pais"
    state: string; // "estado"
    creditAmount: number; // "montocredito"
    paymentDay: number; // "diapago"
    reviewDay: number; // "diarevision"
    receiptType: string; // "tipocontrarecibo"
    biweeklyBilling: string; // "factquincenal"
    viewShipments: number; // "viewenvios"
    gender: string; // "sexo"
    age: number; // "edad"
    businessType: number; // "Giro"
    clientOSId: number; // "idclienteOS"
    advisorId: number; // "idasesor"
    printer: number; // "Printer"
    satKey: number; // "clavesat"
    keyVal: string | null; // "KeyVal"
    isActive: boolean; // "isActive"
    actions: string | null; // "acciones"
    buttons: string; // "buttons"
    buttonSelect: string; // "buttonSelect"
    fullName: string; // "nombrecompleto"
    functionSelect: string; // "functionSelect"

    constructor(data: any) {
        this.id = data.id;
        this.internalCode = data.codigointerno;
        this.type = data.tipo;
        this.firstName = data.nombre;
        this.middleName = data.apellidom;
        this.lastName = data.apellidop;
        this.rfc = data.rfc;
        this.street = data.calle;
        this.interiorNumber = data.noint;
        this.exteriorNumber = data.noext;
        this.postalCode = data.cp;
        this.phone = data.telefono;
        this.city = data.ciudad;
        this.municipality = data.municipio;
        this.neighborhood = data.colonia;
        this.email = data.correo;
        this.addressType = data.tipodomicilio;
        this.registrationDate = data.fechaalta;
        this.credit = data.credito;
        this.check = data.cheque;
        this.active = data.activo;
        this.observation = data.observacion;
        this.franchiseId = data.idfranquicia;
        this.franchiseName = data.nombrefranquicia;
        this.country = data.pais;
        this.state = data.estado;
        this.creditAmount = data.montocredito;
        this.paymentDay = data.diapago;
        this.reviewDay = data.diarevision;
        this.receiptType = data.tipocontrarecibo;
        this.biweeklyBilling = data.factquincenal;
        this.viewShipments = data.viewenvios;
        this.gender = data.sexo;
        this.age = data.edad;
        this.businessType = data.Giro;
        this.clientOSId = data.idclienteOS;
        this.advisorId = data.idasesor;
        this.printer = data.Printer;
        this.satKey = data.clavesat;
        this.keyVal = data.KeyVal;
        this.isActive = data.isActive;
        this.actions = data.acciones;
        this.buttons = data.buttons;
        this.buttonSelect = data.buttonSelect;
        this.fullName = data.nombrecompleto;
        this.functionSelect = data.functionSelect;
    }

    // Getter methods
   get getFullName(): string {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

     get getAddress(): string {
        return `${this.street} ${this.interiorNumber ? this.interiorNumber + '/' : ''}${this.exteriorNumber}, ${this.neighborhood}, ${this.city}, ${this.state}, ${this.postalCode}, ${this.country}`;
    }
}

export class CustomersMapper {
    key: string; // "key"
    isError: boolean; // "isError"
    message: string; // "Message"
    totalRecords: number; // "totalRecords"
    data: Customer[]; // "data"

    constructor(key: string, isError: boolean, message: string, totalRecords: number, data: Customer[]) {
        this.key = key;
        this.isError = isError;
        this.message = message;
        this.totalRecords = totalRecords;
        this.data = data;
    }

    static fromResponse(json: any): CustomersMapper {
        const clients: Customer[] = json.data.map((clientData: any) => new Customer(clientData));

        return new CustomersMapper(json.key, json.isError, json.Message, json.totalRecords, clients);
    }
}

