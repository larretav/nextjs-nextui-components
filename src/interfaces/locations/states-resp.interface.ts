export interface IStatesResp {
  id:        string,
  clave_pais: ClavePais;
  pais:       Pais;
  estado:     string;
}

export enum ClavePais {
  MX = "MX",
}

export enum Pais {
  Mexico = "Mexico",
}
