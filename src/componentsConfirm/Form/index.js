import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';

function Form() {
  const [email, setEmail] = useState('')
  const [surname, setSurname] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && surname && email) {
      console.log(name, surname, email)
    }
  }

  return (
    <Container
      id="section2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <h3>confirmar</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" required onChange={(e) => setName(e.target.value)} placeholder="nome"/>
        <input type="text" required onChange={(e) => setSurname(e.target.value)} placeholder="sobrenome"/>
        <input type="text" required onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          type="submit"
        >CONFIRMAR</motion.button>
      </form>
    </Container>
  )
}

export default Form;