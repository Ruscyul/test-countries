import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

function CountryCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Avatar aria-label="flag" sx={{ bgcolor: 'transparent' }}>
            🏊‍♀️
          </Avatar>
          <Box>
            <Typography>Name</Typography>
            <Typography>Capital</Typography>
          </Box>
          <Typography>Continent</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>Languages</Typography>
          <Typography>Code</Typography>
          <Typography>Currency</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
