import { Box, Card, CardContent, Typography } from '@mui/material';
import { CountryType } from '../CountryList/CountryList';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import TranslateIcon from '@mui/icons-material/Translate';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

polyfillCountryFlagEmojis();

interface CountryCardProps {
  country: CountryType;
}

function CountryCard(props: CountryCardProps) {
  const { country } = props;

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '16px',
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Typography sx={{ fontFamily: 'Twemoji Country Flags', fontSize: '96px' }}>{country.emoji}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5">{country.name}</Typography>
            <Typography variant="overline">{country.capital}</Typography>
            <Typography variant="caption">{country.continent.name}</Typography>
          </Box>
        </Box>

        {country.languages.length > 0 && (
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            <TranslateIcon fontSize="inherit" sx={{ marginRight: '3px' }} />
            {country.languages.map((language) => language.name).join(', ')}
          </Typography>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
          <Typography sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <PhoneEnabledIcon fontSize="inherit" sx={{ marginRight: '3px' }} />
            {`+${country.phone.split(',').join(', ')}`}
          </Typography>

          {country.currency && (
            <Typography sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <EuroSymbolIcon fontSize="inherit" sx={{ marginRight: '3px' }} />
              {country.currency.split(',').join(', ')}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
