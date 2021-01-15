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
  display:flex;
  justify-content: center;

  flex-direction:column;

  h1, h2, h3 {
    color: white;
  }

  h1 {
    font-size: 60px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 40px;
  }

  li {
    color: white;
    font-size: 30px;
    margin-left: 6%;
  }

  ul {
    list-style-image: linear-gradient(#ddd, #f3f);
  }

  .link1 {
    display: none;
    color: white;
    font-size: 25px;
    text-decoration: underline;
    cursor: pointer;

    animation: ${backGrad} 10s ease-in-out infinite;
    background: -webkit-linear-gradient(25deg, #f48c06, #f72585, #16db65, #f42b03, #023e8a); 
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .icon {
    position: relative;
    top: 6px;
    right: 10px;
    transition: all 0.3s ease;
  }

  .link1:hover .icon {
    position: relative;
    right: 2px;
  }

  @media screen and (max-width: 678px) {
    position: unset;
    margin-left: 10%;    

    .link1 {
      display: flex;
    }
    
    h1 {
      font-size: 45px;
    }

    h3 {
      font-size: 25px;
    }

    li {
      color: white;
      font-size: 25px;
      margin-left: 9%;
    }

    }
`