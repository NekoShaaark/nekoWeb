import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'


const Navbar = () => {
    
    //navbar contents
    const navbarContents = (path, name) => {
        return( 
        <li>
            <Link href={path}>
                <a>
                    <span className="background">
                        {name}
                    </span>
                </a>
            </Link>
        </li> 
        )
    }


    //actual page
    return ( 
        <nav className="navigation">

            {/* navbar */}
            <div className ="navigation-primary">
                <ul>
                    {navbarContents("/", "Home")}
                    {navbarContents("/about", "About")}
                    {navbarContents("/cookies", "Cookies")}
                </ul>
            </div>
        
            {/* logo */}
            <div className="navigation-secondary">
                <Link href="/">
                    <Image src="/logo.png" width={131} height={79.25} alt="Logo" title="Back to Homepage"/>
                </Link>
            </div>
            
            {/* settings (dark mode, etc.) */}
            <motion.div className="navigation-settings"
            animate={{ y: [10, 0, 10] }}
            transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
            >
                <Link href="/"><a>Placeholder</a></Link>
            </motion.div>
        </nav>
    )
}
 
export default Navbar;