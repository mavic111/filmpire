import React from 'react';
import { Divider, List, ListItemButton, ListSubheader, ListItemText, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/system';
import { useDispatch } from 'react-redux';
import { ImageLink, Image, Links, GenreImage } from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();

  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  const categories = [
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },
    {
      label: 'Upcoming',
      value: 'upcoming',
    },
  ];

  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <>
      <ImageLink to="/">
        <Image
          sx={{}}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </ImageLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Links key={value} to="/">
            <ListItemButton
              onClick={() => dispatch(selectGenreOrCategory(value))}
            >
              <ListItemIcon>
                <GenreImage src={genreIcons[label.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Links>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ id, name }) => (
          <Links key={id} to="/">
            <ListItemButton
              onClick={() => dispatch(selectGenreOrCategory(id))}
            >
              <ListItemIcon>
                <GenreImage src={genreIcons[name.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Links>
        ))}
      </List>
    </>

  );
};

export default Sidebar;
