import React from 'react'
import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import Page from './components/Page';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header/>
        <Page/>
      </ThemeProvider>
    </>
  );
}

export default App;
