import { IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;

export const AppToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    marginLeft: 0,
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const ThemeToggle = styled(IconButton)({
  marginLeft: 1,
});

export const NavDrawer = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: '0',
  },
}));
