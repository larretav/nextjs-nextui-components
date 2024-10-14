class LocationValueJson {
    postalCode: string; // "Cp"
    locality: string; // "Division2"
    city: string; // "Cityorplace"
    division: string; // "Division1"
    state: string; // "Stateorregion"
    country: string; // "Country"

    constructor(data: any) {
        this.postalCode = data.Cp;
        this.locality = data.Division2;
        this.city = data.Cityorplace;
        this.division = data.Division1;
        this.state = data.Stateorregion;
        this.country = data.Country;
    }
}

export class LocationItem {
    label: string; // "label"
    value: string; // "value"
    valueJson: LocationValueJson; // "valueJson"

    constructor(data: any) {
        this.label = data.label;
        this.value = data.value;
        this.valueJson = new LocationValueJson(data.valueJson);
    }
}

export class LocationResponseMapper {
    data: LocationItem[];

    constructor() {
        this.data = [];
    }

    static fromResponse(json: any[]): LocationResponseMapper {
        const response = new LocationResponseMapper();
        response.data = json.map((item: any) => new LocationItem(item));
        return response;
    }
}
