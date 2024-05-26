import React, { useState } from 'react';
import { AppBar, Toolbar, useMediaQuery, IconButton, useTheme, Button, Avatar, Drawer } from '@mui/material';
import { Menu, Brightness7, Brightness4, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { NavDrawer } from './styles';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = false;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '240px',
            [theme.breakpoints.down('sm')]: {
              flexWrap: 'wrap',
              marginLeft: 0,
            },
          }}
        >
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            sx={{
              marginRight: theme.spacing(2),
              [theme.breakpoints.up('sm')]: {
                display: 'none',
              },
            }}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search /> }
          <div>
            {!isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() => {}}
              >
                Login &nbsp;<AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profiles/:id"
                sx={{
                  '&:hover': {
                    color: 'white !important',
                    textDecoration: 'none',
                  },
                }}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search /> }
        </Toolbar>
      </AppBar>
      <div>
        <NavDrawer>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{
                // drawerPaper
                paper: {
                  width: '240px',
                },
              }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />

            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              classes={{ paper: {} }}
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </NavDrawer>
      </div>
    </>

  );
};

export default NavBar;
