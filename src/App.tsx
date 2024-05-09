import { AppBar, Box, Container, CssBaseline, Link, Toolbar } from '@mui/material';
import CountryList from './components/CountryList/CountryList';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import CountryCard from './components/CountryCard/CountryCard';
import Spinner from './components/Spinner/Spinner';

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

  const renderSearchResult = searchQuery && (
    <>
      {countryByCodeLoading && <Spinner />}
      {countryByCodeError && <p>Error: {countryByCodeError.message}</p>}
      {countryByCodeData && countryByCodeData.countries.length === 0 && <p>No country found...</p>}
      {countryByCodeData && countryByCodeData.countries.length > 0 && (
        <CountryCard country={countryByCodeData.countries[0]} />
      )}
    </>
  );

  const renderCountriesList = (
    <>
      {countriesLoading && <Spinner />}
      {countriesError && <p>Error: {countriesError.message}</p>}
      {countriesData && (
        <Box
          sx={{
            ...(searchQuery && {
              display: 'none',
            }),
          }}
        >
          <CountryList countries={countriesData.countries || []} />
        </Box>
      )}
    </>
  );

  return (
    <CssBaseline>
      <AppBar color="inherit">
        <Container disableGutters maxWidth="lg">
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '5px' }}>
            <Link href="#" variant="button" color="inherit" underline="none">
              Countries
            </Link>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container maxWidth="lg" sx={{ paddingBlock: '16px' }}>
        {renderSearchResult}
        {renderCountriesList}
      </Container>
    </CssBaseline>
  );
}

export default App;
