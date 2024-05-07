import { useQuery, gql } from '@apollo/client';
import CountryCard from '../CountryCard/CountryCard';
import { Grid } from '@mui/material';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
        rtl
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;

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

function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid container spacing={2} sx={{ paddingBlock: '16px' }}>
      {data.countries.map((country: CountryType) => (
        <Grid item xs={12} sm={6} lg={4} key={country.code}>
          <CountryCard country={country} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CountryList;
