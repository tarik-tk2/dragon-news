import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return null
   }
    if (user) {
        return children;
    }
 return  <Navigate to='/login/signin' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;