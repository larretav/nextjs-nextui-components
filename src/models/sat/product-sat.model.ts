import { ProductSATResp } from "@/interfaces"

export default class ProductSATModel {

  constructor(
    public key: string,
    public description: string,
    public similarWords: string,
  ) { }

  static fromJson(obj: ProductSATResp) {
    return new ProductSATModel(
      obj['clave'],
      obj['descripcion'],
      obj['palabrasimilar'],
    )
  }

  toJson() {
    return {
      key: this.key,
      description: this.description,
      similarWords: this.similarWords,
    }
  }
}