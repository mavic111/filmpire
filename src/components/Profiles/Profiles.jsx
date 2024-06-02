import { Box, Typography, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';

const Profiles = () => {
  const { user } = useSelector((state) => state.auth);
  const favoriteMovies = [];
  const logOutUser = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile - {user.username}
        </Typography>
        <Button color="inherit" onClick={logOutUser}>Logout &nbsp; <ExitToApp /></Button>

      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5" gutterBottom>
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>Favorite MOvies</Box>
      )}
    </Box>
  );
};

export default Profiles;
