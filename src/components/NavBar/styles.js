import { styled } from '@mui/system';

const drawerWidth = '240px';

export const NavDrawer = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: '0',
  },
}));
