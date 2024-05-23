import React from 'react';
import { Divider, List, ListItemButton, ListSubheader, ListItemText, ListItemIcon } from '@mui/material';
import { useTheme } from '@mui/system';
import { ImageLink, Image, Links, GenreImage } from './styles';

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

  const genres = [{
    label: 'Comedy',
    value: 'comedy',
  },
  {
    label: 'Action',
    value: 'action',
  },
  {
    label: 'Horror',
    value: 'horror',
  },
  {
    label: 'Animation',
    value: 'animation',
  },
  ];

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
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <ListItemIcon>
                <GenreImage src="" height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Links>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres.map(({ label, value }) => (
          <Links key={value} to="/">
            <ListItemButton
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <ListItemIcon>
                <GenreImage src="" height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Links>
        ))}
      </List>
    </>

  );
};

export default Sidebar;
