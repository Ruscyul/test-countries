import { Box, Card, CardContent, Tooltip, Typography } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import TranslateIcon from '@mui/icons-material/Translate';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import { CountryType } from '../../types';
import { SvgIconComponent } from '@mui/icons-material';

polyfillCountryFlagEmojis();

interface CountryCardProps {
  country: CountryType;
}

interface CountryInfoProps {
  tooltip: string;
  icon: SvgIconComponent;
  data: string;
}

function CountryInfo(props: CountryInfoProps) {
  const { tooltip, icon: Icon, data } = props;

  return (
    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
      <Tooltip title={tooltip} arrow>
        <Icon fontSize="inherit" sx={{ marginRight: '3px' }} />
      </Tooltip>
      {data}
    </Typography>
  );
}

function CountryCard(props: CountryCardProps) {
  const { country } = props;
  const { name, capital, emoji, continent, languages, phone, currency } = country;

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
          <Typography sx={{ fontFamily: 'Twemoji Country Flags', fontSize: '96px' }}>{emoji}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5">{name}</Typography>
            <Typography variant="overline">{capital}</Typography>
            <Typography variant="caption">{continent.name}</Typography>
          </Box>
        </Box>
        {languages.length > 0 && (
          <CountryInfo
            tooltip="Languages"
            icon={TranslateIcon}
            data={languages.map((language) => language.name).join(', ')}
          />
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
          <CountryInfo tooltip="Phone code" icon={PhoneEnabledIcon} data={`+${phone.split(',').join(', ')}`} />
          {currency && <CountryInfo tooltip="Currency" icon={EuroSymbolIcon} data={currency.split(',').join(', ')} />}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
