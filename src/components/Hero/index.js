import React from 'react';
import vinz from '../images/vinzbombadootako.png';
import { Container, Image } from './styles';

function Hero() {
  
  return (
    <Container id="section1">
        <Image
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 1, rotate: 5, transition: { duration: 2 } }}

            whileHover={{ 
                scale: 1.2,
                rotate: -20
            }}
            whileTap={{
                filter: 'brightness(1.4)',
                scale: 0.9
            }}
            transition={{ duration: 0.5 }}
        >
            <img src={vinz} alt="vinz"/>
        </Image>        
        <Image
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 1, rotate: -5, transition: { duration: 2 } }}

            whileHover={{ 
                scale: 0.8,
                rotate: -45
            }}
            whileTap={{
                filter: 'brightness(1.4)',
                scale: 0.9
            }}
            transition={{ duration: 0.5 }}
        >
            <img src={vinz} alt="vinz"/>
        </Image>
        <Image
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 1, rotate: 15, transition: { duration: 2 } }}

            whileHover={{ 
                scale: 1.1,
                rotate: 40
            }}
            whileTap={{
                filter: 'brightness(1.4)',
                scale: 0.9
            }}
            transition={{ duration: 0.5 }}
        >
            <img src={vinz} alt="vinz"/>
        </Image>        
        <Image
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 1, rotate: -15, transition: { duration: 2 } }}

            whileHover={{ 
                scale: 0.6,
                rotate: 25
            }}
            whileTap={{
                filter: 'brightness(1.4)',
                scale: 0.9
            }}
            transition={{ duration: 0.5 }}
        >
            <img src={vinz} alt="vinz"/>
        </Image>
    </Container>
  )
}

export default Hero;