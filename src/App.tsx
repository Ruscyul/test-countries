import { AppBar, CircularProgress, Container, CssBaseline, Link, Toolbar } from '@mui/material';
import CountryList from './components/CountryList/CountryList';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
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

const GET_COUNTRY_BY_CODE = gql`
  query GetCountryByCode($searchQuery: [String!]) {
    countries(filter: { code: { in: $searchQuery } }) {
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

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { loading: countriesLoading, error: countriesError, data: countriesData } = useQuery(GET_COUNTRIES);
  const {
    loading: countryByCodeLoading,
    error: countryByCodeError,
    data: countryByCodeData,
  } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { searchQuery },
  });

  const loading = countriesLoading || countryByCodeLoading;
  const error = countriesError || countryByCodeError;

  const countries = searchQuery ? countryByCodeData?.countries : countriesData?.countries;

  return (
    <CssBaseline>
      <AppBar color="inherit">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '5px' }}
          >
            <Link href="#" variant="button" color="inherit" underline="none">
              Countries
            </Link>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="lg">
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <CircularProgress />
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <CountryList countries={countries || []} />
        )}
      </Container>
    </CssBaseline>
  );
}

export default App;
