// 'use server';
import { IAutoLocationResp } from "@/interfaces";
import { AutocompleteLocationModel } from "@/models";
import { IsoCode } from "@/types";
import { v4 as uuidv4 } from 'uuid'

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

export const getAutocompleteLocation = async (countryCode: IsoCode, term: string) => {
  try {

    const resp = await fetch(`${baseApi}/cps/autocompletejson?country=${countryCode}&term=${term}`);

    if (!resp.ok) throw 'Ocurrió un problema al obtener los estados';

    const jsonData = await resp.json();
    const data = jsonData.length === 0 ? mockAutoLocationResp : jsonData;
    const modifiedData: IAutoLocationResp[] = data.map((item: any) => ({ ...item, id: uuidv4() }));


    const mappedData = modifiedData.map(AutocompleteLocationModel.fromJson);

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


const mockAutoLocationResp = [
  {
    label: "Colonia Roma Norte, CDMX",
    value: "Roma Norte, Ciudad de México",
    valueJson: {
      Cp: "06700",
      Division2: "Roma Norte",
      Cityorplace: "Ciudad de México",
      Division1: "Cuauhtémoc",
      Stateorregion: "Ciudad de México",
      Country: "México",
    },
  },
  {
    label: "Centro, Guadalajara, Jalisco",
    value: "Centro, Guadalajara",
    valueJson: {
      Cp: "44100",
      Division2: "Centro",
      Cityorplace: "Guadalajara",
      Division1: "Guadalajara",
      Stateorregion: "Jalisco",
      Country: "México",
    },
  },
  {
    label: "Monterrey Centro, Nuevo León",
    value: "Centro, Monterrey",
    valueJson: {
      Cp: "64000",
      Division2: "Centro",
      Cityorplace: "Monterrey",
      Division1: "Monterrey",
      Stateorregion: "Nuevo León",
      Country: "México",
    },
  },
  {
    label: "Santa Fe, CDMX",
    value: "Santa Fe, Ciudad de México",
    valueJson: {
      Cp: "05348",
      Division2: "Santa Fe",
      Cityorplace: "Ciudad de México",
      Division1: "Álvaro Obregón",
      Stateorregion: "Ciudad de México",
      Country: "México",
    },
  },
  {
    label: "Centro, Mérida, Yucatán",
    value: "Centro, Mérida",
    valueJson: {
      Cp: "97000",
      Division2: "Centro",
      Cityorplace: "Mérida",
      Division1: "Mérida",
      Stateorregion: "Yucatán",
      Country: "México",
    },
  },
  {
    label: "Polanco, CDMX",
    value: "Polanco, Ciudad de México",
    valueJson: {
      Cp: "11560",
      Division2: "Polanco",
      Cityorplace: "Ciudad de México",
      Division1: "Miguel Hidalgo",
      Stateorregion: "Ciudad de México",
      Country: "México",
    },
  },
  {
    label: "Colonia del Valle, CDMX",
    value: "Colonia del Valle, Ciudad de México",
    valueJson: {
      Cp: "03100",
      Division2: "Colonia del Valle",
      Cityorplace: "Ciudad de México",
      Division1: "Benito Juárez",
      Stateorregion: "Ciudad de México",
      Country: "México",
    },
  },
  {
    label: "Centro, Puebla, Puebla",
    value: "Centro, Puebla",
    valueJson: {
      Cp: "72000",
      Division2: "Centro",
      Cityorplace: "Puebla",
      Division1: "Puebla",
      Stateorregion: "Puebla",
      Country: "México",
    },
  },
  {
    label: "Zapopan Centro, Jalisco",
    value: "Centro, Zapopan",
    valueJson: {
      Cp: "45100",
      Division2: "Centro",
      Cityorplace: "Zapopan",
      Division1: "Zapopan",
      Stateorregion: "Jalisco",
      Country: "México",
    },
  },
  {
    label: "San Pedro Garza García, Nuevo León",
    value: "San Pedro Garza García",
    valueJson: {
      Cp: "66220",
      Division2: "Del Valle",
      Cityorplace: "San Pedro Garza García",
      Division1: "San Pedro Garza García",
      Stateorregion: "Nuevo León",
      Country: "México",
    },
  },
  {
    label: "Centro, Querétaro, Querétaro",
    value: "Centro, Querétaro",
    valueJson: {
      Cp: "76000",
      Division2: "Centro",
      Cityorplace: "Querétaro",
      Division1: "Querétaro",
      Stateorregion: "Querétaro",
      Country: "México",
    },
  },
  {
    label: "Centro, León, Guanajuato",
    value: "Centro, León",
    valueJson: {
      Cp: "37000",
      Division2: "Centro",
      Cityorplace: "León",
      Division1: "León",
      Stateorregion: "Guanajuato",
      Country: "México",
    },
  },
  {
    label: "Centro, San Luis Potosí, SLP",
    value: "Centro, San Luis Potosí",
    valueJson: {
      Cp: "78000",
      Division2: "Centro",
      Cityorplace: "San Luis Potosí",
      Division1: "San Luis Potosí",
      Stateorregion: "San Luis Potosí",
      Country: "México",
    },
  },
  {
    label: "Centro, Oaxaca, Oaxaca",
    value: "Centro, Oaxaca",
    valueJson: {
      Cp: "68000",
      Division2: "Centro",
      Cityorplace: "Oaxaca",
      Division1: "Oaxaca de Juárez",
      Stateorregion: "Oaxaca",
      Country: "México",
    },
  },
  {
    label: "Malecón, Veracruz, Veracruz",
    value: "Malecón, Veracruz",
    valueJson: {
      Cp: "91700",
      Division2: "Malecón",
      Cityorplace: "Veracruz",
      Division1: "Veracruz",
      Stateorregion: "Veracruz",
      Country: "México",
    },
  },
  {
    label: "Centro, Culiacán, Sinaloa",
    value: "Centro, Culiacán",
    valueJson: {
      Cp: "80000",
      Division2: "Centro",
      Cityorplace: "Culiacán",
      Division1: "Culiacán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Las Quintas, Culiacán, Sinaloa",
    value: "Las Quintas, Culiacán",
    valueJson: {
      Cp: "80060",
      Division2: "Las Quintas",
      Cityorplace: "Culiacán",
      Division1: "Culiacán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Tres Ríos, Culiacán, Sinaloa",
    value: "Tres Ríos, Culiacán",
    valueJson: {
      Cp: "80020",
      Division2: "Tres Ríos",
      Cityorplace: "Culiacán",
      Division1: "Culiacán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Colonia Chapultepec, Culiacán, Sinaloa",
    value: "Chapultepec, Culiacán",
    valueJson: {
      Cp: "80200",
      Division2: "Chapultepec",
      Cityorplace: "Culiacán",
      Division1: "Culiacán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Jardines del Sol, Culiacán, Sinaloa",
    value: "Jardines del Sol, Culiacán",
    valueJson: {
      Cp: "80100",
      Division2: "Jardines del Sol",
      Cityorplace: "Culiacán",
      Division1: "Culiacán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Centro, Mazatlán, Sinaloa",
    value: "Centro, Mazatlán",
    valueJson: {
      Cp: "82000",
      Division2: "Centro",
      Cityorplace: "Mazatlán",
      Division1: "Mazatlán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Zona Dorada, Mazatlán, Sinaloa",
    value: "Zona Dorada, Mazatlán",
    valueJson: {
      Cp: "82110",
      Division2: "Zona Dorada",
      Cityorplace: "Mazatlán",
      Division1: "Mazatlán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Marina Mazatlán, Mazatlán, Sinaloa",
    value: "Marina Mazatlán, Mazatlán",
    valueJson: {
      Cp: "82103",
      Division2: "Marina Mazatlán",
      Cityorplace: "Mazatlán",
      Division1: "Mazatlán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "El Venadillo, Mazatlán, Sinaloa",
    value: "El Venadillo, Mazatlán",
    valueJson: {
      Cp: "82129",
      Division2: "El Venadillo",
      Cityorplace: "Mazatlán",
      Division1: "Mazatlán",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Centro, Los Mochis, Sinaloa",
    value: "Centro, Los Mochis",
    valueJson: {
      Cp: "81200",
      Division2: "Centro",
      Cityorplace: "Los Mochis",
      Division1: "Ahome",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Scally, Los Mochis, Sinaloa",
    value: "Scally, Los Mochis",
    valueJson: {
      Cp: "81223",
      Division2: "Scally",
      Cityorplace: "Los Mochis",
      Division1: "Ahome",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "El Fovissste, Los Mochis, Sinaloa",
    value: "El Fovissste, Los Mochis",
    valueJson: {
      Cp: "81289",
      Division2: "El Fovissste",
      Cityorplace: "Los Mochis",
      Division1: "Ahome",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Centro, Guasave, Sinaloa",
    value: "Centro, Guasave",
    valueJson: {
      Cp: "81000",
      Division2: "Centro",
      Cityorplace: "Guasave",
      Division1: "Guasave",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "Colonia San Joachin, Guasave, Sinaloa",
    value: "San Joachin, Guasave",
    valueJson: {
      Cp: "81050",
      Division2: "San Joachin",
      Cityorplace: "Guasave",
      Division1: "Guasave",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
  {
    label: "La Trinidad, Guasave, Sinaloa",
    value: "La Trinidad, Guasave",
    valueJson: {
      Cp: "81100",
      Division2: "La Trinidad",
      Cityorplace: "Guasave",
      Division1: "Guasave",
      Stateorregion: "Sinaloa",
      Country: "México",
    },
  },
];
