export default class Address {

  static fromJson(obj: { [key: string]: any }) {
    return new Address(
      obj['id'],
      obj['isMain'],
      obj['name'],
      obj['street'],
      obj['number'],
      obj['suburb'],
      obj['city'],
      obj['state'],
      obj['country'],
      obj['postalCode'],
      obj['phone'],
      obj['email'],
    )
  }

  constructor(
    public id: string,
    public isMainAddress: boolean,
    public name: string,
    public street: string,
    public number: string,
    public suburb: string,
    public city: string,
    public state: string,
    public country: string,
    public postalCode: string,
    public phone: string,
    public email: string,
  ) { }

  get isMain() {
    return this.isMainAddress
  }

}