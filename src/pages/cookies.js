import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'


{/* variants */}
const h1Variants = {
    hidden: { opacity: 0, x: 0, y: -75 },
    enter: { opacity: 1, x: 0, y: 0 }
}
  
  const pVariants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 }
}


const Cookies = () => {
    return( 
        <>
            <Head>
                <title>Neko Web | Cookies</title>
            </Head>

            {/* actual page */}
            <div>
                <motion.h1 className={styles.title} variants={h1Variants} initial="hidden" animate="enter">Cookies</motion.h1>
                <motion.p className={styles.title} variants={pVariants} initial="hidden" animate="enter">Cookies?</motion.p>
            </div>
        </>
     );
}


export default Cookies;