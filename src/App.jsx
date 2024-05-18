import React from 'react';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components';
import useStyles from './components/styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default App;
