export interface IAutoLocationResp {
  id: string,
  label: string;
  value: string;
  valueJson: IAutoLocationRespValueJson
}

export interface IAutoLocationRespValueJson {
  Cp: string;
  Division2: string;
  Cityorplace: string;
  Division1: string;
  Stateorregion: string;
  Country: string;
}

