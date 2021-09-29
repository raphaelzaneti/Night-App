import React from 'react'
import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import WorkSpace from './components/WorkSpace';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header/>
        <WorkSpace/>
      </ThemeProvider>
    </>
  );
}

export default App;
