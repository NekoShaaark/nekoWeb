import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'


{/* variants */}
const h1Variants = {
  hidden: { opacity: 0, x: 0, y: -75 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const pVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 }
}

const floating1Variants = {
  floating: { y: [10, 0, 10], transition: {ease:"easeInOut", duration:2, repeat:Infinity} }
}

const floating2Variants = {
  floating: { y: [0, 20, 0], transition: {ease:"easeInOut", duration:3, repeat:Infinity} }
}


export default function Home() {
  return (
    <>
      <Head>
          <title>Neko Web | About</title>
      </Head>

      <motion.h1 className={styles.title} variants={h1Variants} initial="hidden" animate="enter">About</motion.h1>
      <motion.div className={styles.text} variants={pVariants} initial="hidden" animate="enter">
        
        <motion.p variants={floating1Variants} animate="floating" whileHover={{ y:10, color:"#555", transition:{ease:"easeInOut"} }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia perspiciatis rerum architecto ipsum praesentium minus veniam. Itaque optio non eligendi! Quas qui nesciunt, exercitationem odio inventore ea nemo natus ad!
        </motion.p>
        
        <motion.p variants={floating2Variants} animate="floating" whileHover={{ y:0, color:"#555", transition:{ease:"easeInOut"} }}>
          Corrupti porro, beatae magni delectus quibusdam et amet dicta placeat? Aliquam cumque, similique quidem blanditiis voluptatum laboriosam ea ratione. Labore sed temporibus aperiam libero! Veniam deleniti id quod maxime explicabo!
        </motion.p>

      </motion.div>
    </>
  )
}