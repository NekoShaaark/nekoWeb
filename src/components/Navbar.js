import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    
    //navbar contents
    const navbarContents = (path, content) => {
        return(
            <li><Link href={path}><a>{content}</a></Link></li>
        )
    }


    //actual page
    return ( 
        <nav className="navigation">

            {/* logo */}
            <div className ="navigation-primary">
                <Link href="/">
                    <Image src="/logo.png" width={131} height={79.25} alt="NekoWeb" title="Back to Homepage"/>
                </Link>
            </div>
        
            {/* navbar */}
            <div className="navigation-secondary">
                <ul>
                    {navbarContents("/", "Home")}
                    {navbarContents("/about", "About")}
                    {navbarContents("/cookies", "Cookies")}
                </ul>
            </div>
            
            {/* settings (dark mode, etc.) */}
            <div className="navigation-settings">
                <Link href="/"><a>Placeholder</a></Link>
            </div>
        </nav>
    )
}
 
export default Navbar;