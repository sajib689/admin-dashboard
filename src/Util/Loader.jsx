import { LifeLine } from "react-loading-indicators";


const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <LifeLine color="#32cd32" size="medium" text="" textColor="" />
        </div>
    );
};

export default Loader;