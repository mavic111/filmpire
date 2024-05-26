import React, { useState } from 'react';
import { AppBar, useMediaQuery, useTheme, Button, Avatar, Drawer } from '@mui/material';
import { Menu, Brightness7, Brightness4, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { NavDrawer, AppToolbar, MenuButton, ThemeToggle } from './styles';
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
        <AppToolbar>
          {isMobile && (
          <MenuButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          >
            <Menu />
          </MenuButton>
          )}
          <ThemeToggle
            color="inherit"
            onClick={() => {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </ThemeToggle>
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
        </AppToolbar>
      </AppBar>
      <div>
        <NavDrawer>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              sx={{
                '.MuiDrawer-paper': {
                  width: 240,
                },
              }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />

            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              sx={{
                '.MuiDrawer-paper': {
                  width: 240,
                },
              }}
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
