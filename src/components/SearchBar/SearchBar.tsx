import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useEffect, useState } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const { searchQuery, setSearchQuery } = props;
  const [text, setText] = useState('');

  // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   const value = event.target.value.toUpperCase();
  //   setSearchQuery(value);
  // }

  function handleClick() {
    setSearchQuery(text);
  }

  useEffect(() => {
    if (!text) {
      setSearchQuery('');
    }
  }, [text]);

  return (
    <>
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="Search by country code (e.g. US)"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton aria-label="search" edge="end" onClick={handleClick}>
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
