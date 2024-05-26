import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { useTheme } from '@mui/system';
import { SearchContainer } from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const theme = useTheme();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    // Check if Enter button is pressed, * onKeyPress is deprecated
    if (event.keyCode === 13) {
      dispatch(searchMovie(query));
    }
  };
  return (
    <SearchContainer>
      <TextField
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          sx: {
            color: theme.palette.mode === 'light' && 'black',
            filter: theme.palette.mode === 'light' && 'invert(1)',
            [theme.breakpoints.down('sm')]: {
              marginTop: '-10px',
              marginBottom: '10px',
            },
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>

  );
};

export default Search;
