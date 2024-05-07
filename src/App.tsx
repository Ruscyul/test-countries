import { AppBar, Container, CssBaseline, Link, Toolbar } from '@mui/material';
import CountryList from './components/CountryList/CountryList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <CssBaseline>
      <AppBar sx={{ paddingBlock: '16px' }} color="inherit">
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '5px' }}
        >
          <Link href="#" variant="button" color="inherit" underline="none">
            Countries
          </Link>
          <SearchBar />
        </Container>
      </AppBar>
      <Toolbar />
      <Container maxWidth="lg">
        <CountryList />
      </Container>
    </CssBaseline>
  );
}

export default App;
