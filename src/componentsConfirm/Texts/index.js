import React from 'react';

import { Container } from './styles';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { BsArrowRightShort } from 'react-icons/bs'

function Texts() {
  return (
      <Container>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 2 }}
          >
            no dia 30/10
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 2 }}
          >
            quitutes da noite
          </motion.h1>
          <ul>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
              >
                  charutos
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 2 }}
              >
                  vodka
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 2 }}
              >
                  energetico
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
              >
                  bolo com desenho de anime
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 2 }}
              >
                  salgados barato
              </motion.li>
          </ul>
          <Link className="link1" activeClass="active" to="section2" spy={true} smooth={true} duration={500}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
          confirmar presença <BsArrowRightShort className="icon"/></motion.span>
          </Link>
      </Container>
  )
}

export default Texts;