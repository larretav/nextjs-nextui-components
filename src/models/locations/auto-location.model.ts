import { IAutoLocationResp } from "@/interfaces"

export class AutocompleteLocationModel {

  constructor(
    public id: string,
    public label: string,
    public postalCode: string,
    public neighborhood: string,
    public city: string,
    public municipality: string,
    public state: string,
    public country: string,
  ) { }

  static fromJson(obj: IAutoLocationResp) {
    return new AutocompleteLocationModel(
      obj['id'],
      obj['label'],
      obj['valueJson']['Cp'],
      obj['valueJson']['Division2'],
      obj['valueJson']['Cityorplace'],
      obj['valueJson']['Division1'],
      obj['valueJson']['Stateorregion'],
      obj['valueJson']['Country'],
    )
  }

  static getEmpty() {
    return new AutocompleteLocationModel('0', '', '', '', '', '', '', '')
  }


  toJson() {
    return {
      id: this.id,
      label: this.label,
      postalCode: this.postalCode,
      neighborhood: this.neighborhood,
      city: this.city,
      municipality: this.municipality,
      state: this.state,
      country: this.country,
      completeAddress: this.completeAddress,
      address: this.address
    }
  }

  get completeAddress(): string { 
    return `${this.postalCode} - ${this.neighborhood}, ${this.city}, ${this.municipality}, ${this.state}, ${this.country}`
  }

  get address(): string { 
    return `${this.neighborhood}, ${this.city}, ${this.state}, ${this.country}`
  }
}