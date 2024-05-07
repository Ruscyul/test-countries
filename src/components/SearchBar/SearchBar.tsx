import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <>
      <TextField
        label="Enter country code to search (e.g. US)"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton aria-label="search" edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}

export default SearchBar;
