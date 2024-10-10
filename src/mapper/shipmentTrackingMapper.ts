/**
 * Mapper for service
 * https://test-mx-api.paq1.com.mx//API/Tracking/2/{trackingNumber}/complete
 */
type TrackingLabel = {
    UrlImg: string;
    Namestate: string;
    On: boolean;
};

type TrackingReport = {
    date: string;
    time: string;
    location: string;
    status: string;
    statusCode: string;
};

export class ShipmentTrackingMapper {
    trackingNumber: string;
    shipper: string;
    shipperId: number;
    documentDate: string;
    promiseDate: string;
    serviceName: string;
    senderContact: string;
    senderPostalCode: string;
    senderCity: string;
    senderCountry: string;
    recipientPostalCode: string;
    recipientCity: string;
    recipientCountry: string;
    serviceMessage: string;
    trackingLabels: TrackingLabel[];
    reports: TrackingReport[];

    constructor(
        trackingNumber: string,
        shipper: string,
        shipperId: number,
        documentDate: string,
        promiseDate: string,
        serviceName: string,
        senderContact: string,
        senderPostalCode: string,
        senderCity: string,
        senderCountry: string,
        recipientPostalCode: string,
        recipientCity: string,
        recipientCountry: string,
        serviceMessage: string,
        trackingLabels: TrackingLabel[],
        reports: TrackingReport[]
    ) {
        this.trackingNumber = trackingNumber;
        this.shipper = shipper;
        this.shipperId = shipperId;
        this.documentDate = documentDate;
        this.promiseDate = promiseDate;
        this.serviceName = serviceName;
        this.senderContact = senderContact;
        this.senderPostalCode = senderPostalCode;
        this.senderCity = senderCity;
        this.senderCountry = senderCountry;
        this.recipientPostalCode = recipientPostalCode;
        this.recipientCity = recipientCity;
        this.recipientCountry = recipientCountry;
        this.serviceMessage = serviceMessage;
        this.trackingLabels = trackingLabels;
        this.reports = reports;
    }

    static fromResponse(response: any): ShipmentTrackingMapper {
        return new ShipmentTrackingMapper(
            response.TrackingNumber,
            response.Shipper,
            response.IdShipper,
            response.FechaDoc,
            response.FechaPromesa,
            response.NombreServicio,
            response.ContactoO,
            response.CPO,
            response.CiudadO,
            response.PaisO,
            response.CPD,
            response.CiudadD,
            response.PaisD,
            response.ServiceMessage,
            response.TrackingLabels.map((label: any) => ({
                UrlImg: label.UrlImg,
                Namestate: label.Namestate,
                On: label.On,
            })),
            response.Reports.map((report: any) => ({
                date: report.date,
                time: report.time,
                location: report.location,
                status: report.status,
                statusCode: report.statusCode,
            }))
        );
    }
    get getOrigin(): string {
        return `${this.senderPostalCode} ${this.senderCity}, ${this.senderCountry}`
    }

    get getDestination(): string {
        return `${this.recipientPostalCode} ${this.recipientCity}, ${this.recipientCountry}`
    }
}