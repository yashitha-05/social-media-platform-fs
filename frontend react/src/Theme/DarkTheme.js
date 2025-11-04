import { createTheme } from "@mui/material";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90CAF9',
      contrastText: '#0D0D0D',
    },
    secondary: {
      main: '#CE93D8',
      contrastText: '#0D0D0D',
    },
    background: {
      default: '#0A0A0A',
      paper: '#0F1720'
    },
    text: {
      primary: '#F5F7FA',
      secondary: '#C5CCD6',
    },
    divider: 'rgba(255,255,255,0.12)'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#0D0D0D'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#0F1720'
        }
      }
    }
  }
});

export default darkTheme;
