import { Grid } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // space-between
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        },
      }}
    >
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
