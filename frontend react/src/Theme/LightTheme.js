import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ec407a', // softer pink
      light: '#f8bbd0',
      dark: '#d81b60',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ab47bc', // accent purple
      light: '#e1bee7',
      dark: '#8e24aa',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
});

export default lightTheme;
