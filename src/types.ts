export interface CountryType {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  languages: { name: string; native: string; rtl: boolean }[];
  continent: {
    name: string;
  };
  emoji: string;
  states: { name: string }[];
}
