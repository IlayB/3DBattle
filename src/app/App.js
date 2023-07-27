import { BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material';

import RetroBackground from '../components/retroBackground';
import TopMenuNavigation from '../components/topMenuNavigation/TopMenuNavigation';
import { AppRoutes } from './route/AppRoutes';
import Notification from '../features/notification/Notification';

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
  return (
    <div className="App">
      <ThemeProvider theme={MuiTheme}>
        <RetroBackground />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <TopMenuNavigation />
          <AppRoutes />
          <Notification />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
