import React from 'react';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components';
import { Root, Content, Toolbar } from './styles';

const App = () => (
  <Root>
    <CssBaseline />
    <NavBar />
    <Content>
      <Toolbar />
      <Outlet />
    </Content>
  </Root>

);
export default App;
