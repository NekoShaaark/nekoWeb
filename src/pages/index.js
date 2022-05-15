import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'


{/* variants */}
const h1Variants = {
    hidden: { opacity: 0, x: 0, y: -75 },
    enter: { opacity: 1, x: 0, y: 0 }
}
  
const pVariants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 }
}


export default function Home() {
  return (
    <>
      <Head>
          <title>Neko Web | Home</title>
      </Head>

      <motion.h1 className={styles.title} variants={h1Variants} initial="hidden" animate="enter">NekoWeb</motion.h1>
      <motion.div className={styles.text} variants={pVariants} initial="hidden" animate="enter">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ab mollitia dolores quas tenetur, recusandae, vitae soluta quam consectetur maiores non illo aliquam quibusdam ex vel quisquam. Debitis, nemo laborum!</p>
        <p>Laudantium sunt, quaerat recusandae voluptatum quod ipsam? Repellendus blanditiis eius est cupiditate, pariatur accusamus recusandae, consectetur perferendis expedita iste dolore delectus quo aliquam placeat eveniet laborum ratione. Libero, facere quae.</p>
        <p>Fuga modi vel neque eum aspernatur, animi nihil quo delectus illum magnam voluptatibus veritatis reprehenderit magni, cum omnis non minus rerum. Voluptates, odio quibusdam! Nisi, praesentium. Laudantium tenetur itaque quidem.</p>
      </motion.div>
    </>
  )
}