import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";


const Main = () => {
    const location = useLocation();
    const isLogin =
      location.pathname.includes("login") ||
      location.pathname.includes("register");

    return (
        <div>
            { isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            { isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;