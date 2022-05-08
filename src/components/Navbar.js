import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/cookies"><a>Cookies</a></Link></li>
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