import { countries } from "@/constants/countries.const";

export type IsoCode = typeof countries[number]['isoCode'];

export type Country = {
  name: string;
  isoCode: IsoCode;
  flagUrl: string;
  phoneCode: string;
}