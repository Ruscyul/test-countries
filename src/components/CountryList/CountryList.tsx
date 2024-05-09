import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { Grid } from '@mui/material';

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

interface CountryListProps {
  countries: CountryType[];
}

function CountryList(props: CountryListProps) {
  const { countries } = props;

  return (
    <Grid container spacing={2} sx={{ paddingBlock: '16px' }}>
      {countries.length === 0 && <p>No countries found</p>}
      {countries.map((country: CountryType) => (
        <Grid item xs={12} sm={6} lg={4} key={country.code}>
          <CountryCard country={country} />
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(CountryList);
