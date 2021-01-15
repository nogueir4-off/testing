import React from 'react';
import Texts from './componentsConfirm/Texts'
import Form from './componentsConfirm/Form'
import GlobalStyles from './styles/GlobalStyles'

import { Container, ColumnRight, ColumnLeft } from './stylesConfirm';

function Confirm() {
  return (
      <Container>
        <ColumnLeft>
            <Texts/>
        </ColumnLeft>
        <ColumnRight>
          <Form/>
        </ColumnRight>
        <GlobalStyles/>
      </Container>
  )
}

export default Confirm