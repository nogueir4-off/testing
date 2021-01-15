import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { Link as LinkTo } from 'react-router-dom';

function Texts() {
  return (
    <Container>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
        >no dia 30/10</motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
        >Aniversario de kurosaki vinz</motion.h1>
        <Link className="link1" activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
          fotos do gordola <BsArrowRightShort className="icon"/></motion.span>
        </Link>
        <LinkTo to="/confirm" className="link2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >confirmar presença <BsArrowRightShort className="icon"/></motion.span>
        </LinkTo>
    </Container>
  )
}

export default Texts;