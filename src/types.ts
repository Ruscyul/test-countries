export interface CountryType {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  languages: { name: string }[];
  continent: {
    name: string;
  };
  emoji: string;
}
