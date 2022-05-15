import Navbar from "./Navbar"
import Footer from "./Footer"
import { useRouter } from 'next/router'


const Layout = ({ children }) => {
    const router = useRouter()

    //render layout as normal
    if(router.pathname != "/404" ){
        return (
            <div className="content">
                <Navbar />
                { children }
                <Footer />
            </div>
    )}

    //dont render layout if is a specified page (specified pages above)
    else{ 
        return (
            <div className="content">
                { children }
            </div>
        )
    }
}
 
export default Layout;