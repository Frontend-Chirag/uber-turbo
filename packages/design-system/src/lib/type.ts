import { COUNTRIES } from "./constants";


export type CountryIso = keyof typeof COUNTRIES;

export type Country = Readonly<{
    dialCode: string;
    id: CountryIso;
    label: string;
  }>;