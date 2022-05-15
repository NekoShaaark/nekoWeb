import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'


{/* variants */}
const divVariants = {
    hidden: { opacity: 0, x: 0, y: -75 },
    enter: { opacity: 1, x: 0, y: 0 }
}


const NotFound = () => {
    const router = useRouter();

    //push to home page after 3 seconds
    useEffect(() => {
        setTimeout(() => { router.push('/') }, 3000) 
    })

    //actual page
    return (
        <>
            <Head>
                <title>Neko Web | Error</title>
            </Head>

            <motion.div className="not-found" variants={divVariants} initial="hidden" animate="enter">
                <h1>Oopsie...</h1>
                <h2>Sadly that page cannot be found..</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </motion.div>
        </>
    )
}
 
export default NotFound;