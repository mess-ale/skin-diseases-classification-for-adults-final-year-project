import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (portrait phones)
      sm: 600, // Small devices (landscape phones)
      md: 990, // Medium devices (tablets)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra large devices (large desktops)
    },
  },

  palette: {
    primary: {
      main: '#ddffda', // Color 2
    },
    secondary: { 
      main: '#e9e3cf', 
    },
    background: {
      main: '#3f6432',
      default: '#eff2e5',
      last: "#e9e3cf",
    },
    text: {
      main: '#000', // Color 5
      default: '#fff',
    },
  },

  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 'bold',
      fontSize: '1.09rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  
});

export default theme;
