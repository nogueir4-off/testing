import React from 'react';
import Hero from './components/Hero';
import Texts from './components/Texts';
import GlobalStyles from './styles/GlobalStyles';
import { Container, ColumnLeft, ColumnRight } from './styles';

function App() {
  return (
    <>
      <Container>
        <ColumnLeft>
          <Texts/>
        </ColumnLeft>
        <ColumnRight>
          <Hero/>
        </ColumnRight>
          <GlobalStyles/>
      </Container>
    </>
  );
}

export default App;
