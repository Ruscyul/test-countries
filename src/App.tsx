import { useState } from 'react';
import { AppBar, Box, Container, CssBaseline, Link, Toolbar } from '@mui/material';
import { CountryCard, CountryList, SearchBar, Spinner } from './components';
import { useCountriesQuery } from './hooks/useCountriesQuery';
import { useCountryByCodeQuery } from './hooks/useCountryByCodeQuery';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { loading: countriesLoading, error: countriesError, data: countriesData } = useCountriesQuery();
  const {
    loading: countryByCodeLoading,
    error: countryByCodeError,
    data: countryByCodeData,
  } = useCountryByCodeQuery(searchQuery);

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
            <SearchBar setSearchQuery={setSearchQuery} />
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
