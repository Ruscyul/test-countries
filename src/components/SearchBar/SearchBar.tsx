import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const { setSearchQuery } = props;
  const [text, setText] = useState('');

  function handleSearchSumbit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchQuery(text.toUpperCase());
  }

  function handleClearClick() {
    setText('');
  }

  useEffect(() => {
    if (!text) {
      setSearchQuery('');
    }
  }, [text]);

  return (
    <form onSubmit={handleSearchSumbit}>
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="Search by country code (e.g. US)"
        size="small"
        inputProps={{ maxLength: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search" edge="start">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="clear" edge="end" onClick={handleClearClick}>
                ⨯
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

export default SearchBar;
