import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Herader from "./Header/Herader";


const Roots = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Herader></Herader>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;