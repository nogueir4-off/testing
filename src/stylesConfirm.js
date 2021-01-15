import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px;
  
  @media screen and (max-width: 678px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ColumnLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 95vh;
    position: relative;
`

export const ColumnRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 95vh;
`