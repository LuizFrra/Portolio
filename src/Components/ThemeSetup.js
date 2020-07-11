import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#292929',
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
});

export default function ThemeSetup(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}