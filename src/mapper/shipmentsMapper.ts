// Define the DataItem class
export class ShipmentItem {
    constructor(
        public id: number,
        public clientOriginId: number,
        public clientDocFolio: number,
        public branchId: number,
        public foreignBranchId: number,
        public date: string,
        public shiftId: number,
        public time: string,
        public userId: number,
        public userName: string,
        public allianceId: number,
        public allianceName: string,
        public declaredValue: number,
        public customsValue: number,
        public freightSubtotal: number,
        public serviceSubtotal: number,
        public insuranceSubtotal: number,
        public packingSubtotal: number,
        public subtotalWithoutDiscount: number,
        public discountPercentage: number,
        public discountAmount: number,
        public subtotal: number,
        public tax: number,
        public total: number,
        public clientOriginName: string,
        public destinationAddressId: number,
        public originPostalCode: string,
        public originStreet: string,
        public originNumber: string,
        public originPhone: string,
        public originEmail: string,
        public originCity: string,
        public originMunicipality: string,
        public originState: string,
        public originCountry: string,
        public originRFC: string,
        public originNeighborhood: string,
        public status: string,
        public destinationClientId: number,
        public originAddressId: number,
        public destinationClientName: string,
        public destinationPostalCode: string,
        public destinationStreet: string,
        public destinationNumber: string,
        public destinationPhone: string,
        public destinationCity: string,
        public destinationMunicipality: string,
        public destinationState: string,
        public destinationNeighborhood: string,
        public destinationEmail: string,
        public destinationCountry: string,
        public notes: string,
        public customClientReference: string,
        public guideNumber: string,
        public trackingNumber: string,
        public identificationType: string,
        public allianceProductCode: string,
        public allianceProductName: string,
        public deliveryDate: string,
        public identificationNumber: string,
        public paymentType: string,
        public received: number,
        public change: number,
        public contact: string,
        public globalProductCode: string,
        public localProductCode: string,
        public delivered: string,
        public documentDate: string,
        public documentNumber: string,
        public bankDocument: string,
        public cardNumber: string,
        public invoiceSeries: string,
        public invoiceFolio: number,
        public tempFolio: number,
        public label: string | null,
        public zpl: string | null,
        public paid: string,
        public paymentDate: string,
        public mobile: string,
        public receivingBranchId: number,
        public ticketPkt1: number,
        public occurs: number,
        public additionalSubtotal: number,
        public servicePKT1Subtotal: number,
        public details: string | null,
        public actions: string | null,
        public buttons: string,
        public buttonSelect: string | null,
        public destinationAddress: string,
        public statusName: string,
        public packages: number,
        public shippingStatus: string | null,
        public ecomType: string,
        public ecomOrderNumber: string,
        public acknowledgment: string,
        public transferSeries: string,
        public transferFolio: string,
        public tempTransferFolio: number,
        public fedexPorteLetter: string,
        public quotationFolio: number,
        public mobileOS: string | null,
        public forcedOfficeKey: string
    ) {}

    get formattedEcomType(): string {
        return this.ecomType.split("-")[0].toLowerCase()
    }

    get formattedDate(): string {
        return this.date.split(" ")[0]
    }

    get CustomerName(): string {
        return this.destinationClientName
    }

    get OriginDestination(): string {
        return `${this.originCity} - ${this.destinationCity}`
    }

    get Cost(): number {
        return this.total
    }

    get getStatusName(): string {
        return this.statusName.toLowerCase()
    }
    get getShipper():string{
        return this.allianceName.split("-")[0].toLowerCase()
    }

    get isForeignBranch(): boolean {
        return this.foreignBranchId > 0
    }
}

// Define the interface for the complete response
interface ApiResponse {
    draw: number;
    recordsTotal: number;
    recordsFiltered: number;
    data: ShipmentItem[];
}

// Define the MappedResponse class
export class ShipmentsMapper {
    draw: number;
    recordsTotal: number;
    recordsFiltered: number;
    data: ShipmentItem[];

    constructor(mappedData: ApiResponse) {
        this.draw = mappedData.draw;
        this.recordsTotal = mappedData.recordsTotal;
        this.recordsFiltered = mappedData.recordsFiltered;
        this.data = mappedData.data;
    }

    // Static method to map the response and return MappedResponse instance
    static fromResponse(response: any): ShipmentsMapper {
        const mappedData: ApiResponse = {
            draw: response.draw,
            recordsTotal: response.recordsTotal,
            recordsFiltered: response.recordsFiltered,
            data: response.data.map((item: any) => new ShipmentItem(
                item.id,
                item.idclienteorigen,
                item.folioDocClienteCliente,
                item.idSucursal,
                item.idSucursalForanea,
                item.fecha,
                item.idturno,
                item.hora,
                item.idusuario,
                item.nombreusuario,
                item.idalianza,
                item.nombrealianza,
                item.valordeclarado,
                item.valoraduanal,
                item.subtotalflete,
                item.subtotalservicios,
                item.subtotalseguro,
                item.subtotalembalaje,
                item.subtotalsindescuento,
                item.porcdescuento,
                item.importedescuento,
                item.subtotal,
                item.iva,
                item.total,
                item.nombreclienteorigen,
                item.iddirecciondestino,
                item.cpclienteorigen,
                item.calleorigen,
                item.numeroorigen,
                item.telefonoorigen,
                item.correoorigen,
                item.ciudadorigen,
                item.municipioorigen,
                item.estadoorigen,
                item.paisorigen,
                item.rfcorigen,
                item.coloniaorigen,
                item.estatus,
                item.idclientedestino,
                item.iddireccionorigen,
                item.nombreclientedestino,
                item.cpdestino,
                item.calledestino,
                item.numerodestino,
                item.telefonodestino,
                item.ciudaddestino,
                item.municipiodestino,
                item.estadodestino,
                item.coloniadestino,
                item.correodestino,
                item.paisdestino,
                item.observaciones,
                item.customrefclient,
                item.noguia,
                item.norastreo,
                item.identificacion,
                item.claveproductoalianza,
                item.nombreproductoalianza,
                item.fechaentrega,
                item.numidentificacion,
                item.tipopago,
                item.recibido,
                item.cambio,
                item.contacto,
                item.globalproductcode,
                item.localproductcode,
                item.entregada,
                item.fechadocumento,
                item.numdocumento,
                item.bancodocumento,
                item.notarjeta,
                item.seriefactura,
                item.foliofactura,
                item.foliotemp,
                item.label,
                item.zpl,
                item.pagado,
                item.fechapago,
                item.movil,
                item.idsucursalreceptora,
                item.ticketpkt1,
                item.ocurre,
                item.subtotaladicional,
                item.subtotalservicioPKT1,
                item.detalles,
                item.acciones,
                item.buttons,
                item.buttonSelect,
                item.domiciliodest,
                item.nombreestatus,
                item.bultos,
                item.estatusenvios,
                item.tipoecom,
                item.nopedidoecom,
                item.acuse,
                item.serietraslado,
                item.foliotraslado,
                item.foliotemptraslado,
                item.cartaportefedex,
                item.foliocotizacion,
                item.movilOS,
                item.keyOfficeForced
            ))
        };

        return new ShipmentsMapper(mappedData);
    }


}
