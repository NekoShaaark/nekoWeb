import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'


{/* variants */}
const h1Variants = {
  hidden: { opacity: 0, x: 0, y: -75 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const pVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 }
}


export default function Home() {
  return (
    <>
      <Head>
          <title>Neko Web | About</title>
      </Head>

      <motion.h1 className={styles.title} variants={h1Variants} initial="hidden" animate="enter">About</motion.h1>
      <motion.div className={styles.text} variants={pVariants} initial="hidden" animate="enter">

        <div className={styles.floating1}>
          <p className={styles.background1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolores! Id nihil quos dolores laboriosam nostrum voluptatem aliquam suscipit, doloremque voluptatibus quasi sapiente labore minima consectetur ullam. Iste, nisi dolorem?</p>
        </div>
        <div className={styles.floating2}>
          <p className={styles.background2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore consequuntur adipisci nam eaque, reiciendis alias est officiis accusantium assumenda eos cum minima quo, suscipit quibusdam nisi animi exercitationem et!</p>
        </div>

      </motion.div>
    </>
  )
}