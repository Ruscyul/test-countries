import { gql, useQuery } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      phone
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
      emoji
    }
  }
`;

export function useCountriesQuery() {
  return useQuery(GET_COUNTRIES);
}
