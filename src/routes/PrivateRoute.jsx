import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) {
        return (
          <div className="flex items-center justify-center pt-20">
            <span className="loading text-center loading-bars loading-lg"></span>
          </div>
        );
    }
    if(user) {
        return children;   
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;