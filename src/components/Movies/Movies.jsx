import React from 'react';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data } = useGetMoviesQuery();
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default Movies;
