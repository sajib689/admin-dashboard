import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../Util/Loader";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)
   const location = useLocation()
   if(loading){
    return <Loader/>
   }
   if(user) {
    return children
   }
   return <Navigate to='/auth/login' state={{ from: location }} />
};

export default PrivateRoute;