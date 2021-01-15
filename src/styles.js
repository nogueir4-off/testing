import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 678px) {
    display: grid;
    grid-template-columns: 1fr;
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
    position: relative;

    @media screen and (max-width: 678px) {
      margin-bottom: 12%;
      margin-top: 12%;
    }
`