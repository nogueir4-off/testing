import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Image = styled(motion.div)`
    background-color: #dc2f02;
    width: 190px; 
    height: 190px; 
    display: flex;
    border-radius: 20%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0, 0, 0) 0px 10px 15px;
    position: absolute;
    bottom: 50%;
    top: 50%;

    img {
        position: absolute;
        bottom: 0;
        pointer-events: none;
        width: 135px;  
    }

    @media screen and (max-width: 678px) {
        width: 160px; 
        height: 160px; 
        position: relative;

        img {
            width: 120px;

        }
    }
`

export const Container = styled.div`
    ${Image}:nth-child(1) {
        background: linear-gradient(280deg, #dc2f02 10%, #dc2f02 15%, #f48c06 100%);
        top: 80px;
        right: 28%;
    }
    ${Image}:nth-child(2) {
        background: linear-gradient(180deg, #058c42 10%, #058c42 15%, #16db65 100%);
        top: 185px;
        left: 80px;
    }
    ${Image}:nth-child(3) {
        background: linear-gradient(90deg, #e70e02 10%, #e70e02 15%, #f42b03 100%);
        top: 400px;
        left: 30%;
    }
    ${Image}:nth-child(4) {
        background: linear-gradient(300deg, #03045e 10%, #03045e 15%, #023e8a 100%);
        top: 290px;
        right: 80px;
    }

    @media screen and (max-width: 678px) {
        ${Image}:nth-child(1) {
            top: 0px;
            right: 0px;
            left: 0px;
        }
        ${Image}:nth-child(2) {
            top: 0px;
            right: 0px;
            left: 0px;
        }
        ${Image}:nth-child(3) {
            top: 0px;
            right: 0px;
            left: 0px;
        }
        ${Image}:nth-child(4) {
            top: 0px;
            right: 0px;
            left: 0px;
        }   
    }
`;

