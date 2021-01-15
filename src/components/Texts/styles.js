import styled, { keyframes } from 'styled-components';

const backGrad = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

export const Container = styled.div`
  position: absolute;
  left: 10%;

  h1, h2, h3 {
    color: white;
  }

  h1 {
    font-size: 60px;
  }

  h3 {
    font-size: 40px;
  }

  .link1, .link2 {
    display: none;
    color: white;
    position: relative;
    left: 10px;
    font-size: 40px;
    text-decoration: underline;
    cursor: pointer;

    animation: ${backGrad} 10s ease-in-out infinite;
    background: -webkit-linear-gradient(25deg, #f48c06, #f72585, #16db65, #f42b03, #023e8a); 
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .link2 {
    display: flex;

    font-size: 30px;
  }

  .icon {
    position: relative;
    top: 8px;
    right: 12px;
    transition: all 0.3s ease;
  }

  .link1:hover .icon, .link2:hover .icon {
    position: relative;
    right: 2px;
  }

  @media screen and (max-width: 678px) {
    position: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    
    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 30px;
    }
    
    .link1 {
      display: flex;
      position: relative;
      left: 10px;
      color: white;
      font-size: 30px;
      text-decoration: underline;
      cursor: pointer;
    }

    .icon {
      position: relative;
      top: 7px;
      right: 12px;
      transition: all 0.3s ease;
    }
  }
`;
