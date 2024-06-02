import React, { useEffect, useState } from 'react';
import { AppBar, useMediaQuery, useTheme, Button, Avatar, Drawer } from '@mui/material';
import { Menu, Brightness7, Brightness4, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavDrawer, AppToolbar, MenuButton, ThemeToggle } from './styles';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';
import { createSessionId, fetchToken, moviesApi } from '../../utils';
import { setUser } from '../../features/auth';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          // Get user data
          // https://developer.themoviedb.org/reference/account-details
          const { data: UserData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(UserData));
        } else {
          // Create session_id
          const sessionId = await createSessionId();
          const { data: UserData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(UserData));
        }
      }
    };
    logInUser();
  }, [dispatch, sessionIdFromLocalStorage, token]);

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
                onClick={fetchToken}
              >
                Login &nbsp;<AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
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
