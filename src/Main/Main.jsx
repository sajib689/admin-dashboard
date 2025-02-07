import { Outlet } from "react-router-dom";
import Login from "../Authentication/Login";

const Main = () => {
    return (
        <div>
            <Login/>
            <Outlet/>
        </div>
    );
};

export default Main;