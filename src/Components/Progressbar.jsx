import React from 'react'
import { motion, useScroll } from "framer-motion"
import './Progressbar.css'

export const Progressbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
       <motion.div className="progress" style={{ scaleX: scrollYProgress }} /> 
    </div>
  )
}
