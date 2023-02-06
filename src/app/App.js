import { BrowserRouter } from 'react-router-dom';
import RetroBackground from '../components/retroBackground';
import TopMenuNavigation from '../components/topMenuNavigation/TopMenuNavigation';
import { AppRoutes } from './route/AppRoutes';
import { createTheme, ThemeProvider } from '@mui/material';

const MuiTheme = createTheme({
  typography: {
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
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
