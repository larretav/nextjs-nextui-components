'use server';
import { IAutoLocationResp } from "@/interfaces";
import { AutocompleteLocationModel } from "@/models";
import { IsoCode } from "@/types";
import { v4 as uuidv4 } from 'uuid'

const baseApi = process.env.BASE_API;

export const getAutocompleteLocation = async (countryCode: IsoCode, term: string) => {
  try {

    const resp = await fetch(`${baseApi}/cps/autocompletejson?country=${countryCode}&term=${term}`);

    if (!resp.ok) throw 'Ocurrió un problema al obtener los estados';

    const jsonData = await resp.json();
    const modifiedData: IAutoLocationResp[] = jsonData.map((item: any) => ({ ...item, id: uuidv4() }))

    const mappedData = modifiedData.map(item => AutocompleteLocationModel.fromJson(item));

    return {
      ok: true,
      data: mappedData.map(item => item.toJson()) as AutocompleteLocationModel[]
    };

  } catch (error: any) {
    return {
      ok: false,
      error: typeof error !== "string" ? error?.message : error
    };
  }
}