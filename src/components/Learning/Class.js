import React from 'react'
import Content from './Content'
import SchemeOfWork from './SchemeOfWork'
import { motion } from 'framer-motion'

function Class() {
  return (
    <motion.div  initial={{  opacity: 0}}
    animate={{ opacity:1}}
    transition={{ duration: 1.55}}>
    <section className='flex justify-between p-10'>
    <SchemeOfWork />
    <Content />

    </section>
    </motion.div>
  )
}

export default Class
