import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header';
import WorkSpace from './components/WorkSpace';
import Store from './context/Store';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Store>
          <Header />
          <WorkSpace />
        </Store>
      </ThemeProvider>
    </>
  );
}

export default App;
