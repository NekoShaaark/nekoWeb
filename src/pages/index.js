import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
          <title>Neko Web | Home</title>
      </Head>

      <div className={styles.title}>
        <h1>NekoWeb</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ab mollitia dolores quas tenetur, recusandae, vitae soluta quam consectetur maiores non illo aliquam quibusdam ex vel quisquam. Debitis, nemo laborum!</p>
        <p>Laudantium sunt, quaerat recusandae voluptatum quod ipsam? Repellendus blanditiis eius est cupiditate, pariatur accusamus recusandae, consectetur perferendis expedita iste dolore delectus quo aliquam placeat eveniet laborum ratione. Libero, facere quae.</p>
        <p>Fuga modi vel neque eum aspernatur, animi nihil quo delectus illum magnam voluptatibus veritatis reprehenderit magni, cum omnis non minus rerum. Voluptates, odio quibusdam! Nisi, praesentium. Laudantium tenetur itaque quidem.</p>
      </div>
    </>
  )
}