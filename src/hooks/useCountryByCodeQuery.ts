import { gql, useQuery } from '@apollo/client';

const GET_COUNTRY_BY_CODE = gql`
  query GetCountryByCode($searchQuery: [String!]) {
    countries(filter: { code: { in: $searchQuery } }) {
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

export function useCountryByCodeQuery(searchQuery: string) {
  return useQuery(GET_COUNTRY_BY_CODE, {
    variables: { searchQuery },
  });
}
