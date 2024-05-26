import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Links, MovieImage } from './styles';

const Movie = ({ movie, i }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={3}
    xl={2}
    sx={{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
    }}
  >
    <Grow in key={i} timeout={(1 + i) * 250}>
      <Links to={`/movies/${movie.id}`}>
        <MovieImage alt={movie.title} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://fillmurray.com/200/300'} />
      </Links>
    </Grow>
    <Typography
      variant="h5"
      sx={{
        color: 'text.primary',
        textOverflow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: '0',
        textAlign: 'center',
      }}
    >{movie.title}
    </Typography>
    <Tooltip disableTouchListener title={movie.vote_average / 10}>
      <div>
        <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
      </div>

    </Tooltip>
  </Grid>
);

export default Movie;
