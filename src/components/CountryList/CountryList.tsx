import React from 'react';
import { Grid } from '@mui/material';
import { CountryType } from '../../types';
import CountryCard from '../CountryCard';

interface CountryListProps {
  countries: CountryType[];
}

function CountryList(props: CountryListProps) {
  const { countries } = props;

  return (
    <Grid container spacing={2}>
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
