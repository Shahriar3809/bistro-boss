import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
      return (
        <div className="flex items-center justify-center pt-20">
          <span className="loading text-center loading-bars loading-lg"></span>
        </div>
      );
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>;

};

AdminRoute.propTypes = {
  children: PropTypes.any,
};
export default AdminRoute;