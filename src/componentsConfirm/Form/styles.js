import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 400px;
  max-width: 380px;
  width: 100%;
  height: 100%;

  border: 2px solid white;
  border-radius:10px;
  margin: 75px 0;
  padding:20px;

  h3 {
    color: white;
    font-size: 36.5px;  
  }

  button {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    
    cursor: pointer;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    padding: 5px;
    border-radius: 5px;
  }

  input {
    background-color: transparent;
    border: none;
    transition: all 600ms ease;
    font-size: 20px;
    color: white;
    outline: none;
    padding-bottom: 10px;
    border-bottom: 2px solid #212121; 
  }

  input:focus {
    background: 
     linear-gradient(#0A0A0A,#0A0A0A) padding-box, /*this is your grey background*/
     linear-gradient(to right, #9c20aa, #fb3570) border-box;

    border-bottom: 2px solid transparent;
  }

  input::placeholder {
    font-size: 20px;
  }

  input, button {
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;
  }
`;
