import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import App from './App';
import { MovieInformation, Profiles, Actors, Movies } from './components';
import store from './app/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Movies />} />
      <Route path="/profile/:id" element={<Profiles />} />
      <Route path="/movies/:id" element={<MovieInformation />} />
      <Route path="/actors/:id" element={<Actors />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Route>,
  ),
);

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
