import Navbar from "./Navbar"
import Footer from "./Footer"
import { useRouter } from 'next/router'


const Layout = ({ children }) => {
    const router = useRouter()

    //render layout as normal
    if(router.pathname != "/404"){
        return (
            <div className="layout">

                {/* navbar */}
                <div className="layout-nav">
                    <Navbar />
                </div>

                {/* sidebars */}
                <div className="leftbar" />
                <div className="rightbar" />

                {/* content */}
                <div className="layout-content">
                    { children }
                </div>

                {/* footer */}
                <div className="layout-footer">
                    <Footer />
                </div>
            </div>
    )}


    //dont render layout if is a specified page (specified pages above)
    else{ 
        return (
            <div className="content">
                { children }
            </div>
        )}
}
 

export default Layout;