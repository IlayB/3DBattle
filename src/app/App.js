import { BrowserRouter } from 'react-router-dom';
import { getToken } from 'firebase/messaging';

import { createTheme, ThemeProvider } from '@mui/material';

import RetroBackground from '../components/retroBackground';
import TopMenuNavigation from '../components/topMenuNavigation/TopMenuNavigation';
import { AppRoutes } from './route/AppRoutes';
import { messaging } from '../auth/firebaseApp';
import { useEffect } from 'react';

const MuiTheme = createTheme({
  typography: {
    fontFamily: 'New Rocker',
    allVariants: {
      color: 'white',
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  useEffect(() => {
    getToken(messaging, {
      vapidKey:
        'BPWRKU0cZTpZlMMK71z57nS-Bubi4NknfuIFC5NYpXVaPBfiPdA2BBOpyshiLqop-t4Em_amhl5X3vFBtI6dEvE',
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log('TOKEN', currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }, []);

  useEffect(() => {
    navigator.serviceWorker.addEventListener('message', ({ data }) =>
      console.log('GOT MESSAGE', data),
    );
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={MuiTheme}>
        <RetroBackground />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <TopMenuNavigation />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
