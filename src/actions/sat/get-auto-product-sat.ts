import { ProductSATResp } from "@/interfaces";
import ProductSATModel from "@/models/sat/product-sat.model";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

export const getAutoProductSAT = async (search: string) => {
  try {

    const resp = await fetch(baseApi + `/facturacion/ClaveServicio/${search}?cartaPorte=true&search=${search}`);

    if (!resp.ok)
      throw 'Error al consultar. ' + resp.statusText;

    const respData: ProductSATResp[] = await resp.json();
    const mappedData = respData.map(item => ProductSATModel.fromJson(item));

    return {
      ok: true,
      data: mappedData.map(item => item.toJson()) as ProductSATModel[]
    }
  } catch (error: any) {
    return {
      ok: false,
      error: typeof error !== 'string' ? error?.message : error
    }
  }
}