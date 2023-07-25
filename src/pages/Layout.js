import NavBar from "../components/partials/NavBar";
import Footer from "../components/partials/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className="container py-4" id="main">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;