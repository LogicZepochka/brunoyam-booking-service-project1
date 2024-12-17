import { Outlet } from "react-router-dom";
import LogoSVG from "../../components/LogoSVG";
import NavBarDesktop from "../../components/NavBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";



export default function MainLayout(props) {

    return (
        <>
        <NavBarDesktop />
        <Outlet />
        <Footer />
        </>
    )
}