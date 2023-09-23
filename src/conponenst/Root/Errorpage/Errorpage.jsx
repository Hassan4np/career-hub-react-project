import { NavLink } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="text-center mt-60">
            <h1 className="mb-5 text-5xl">Opps....</h1>
            <NavLink to="/"><button className="btn btn-primary">Go Home</button></NavLink>
        </div>
    );
};

export default Errorpage;