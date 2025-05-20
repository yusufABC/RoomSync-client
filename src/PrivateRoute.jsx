import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({children}) => {
    const{user,loader}=useContext(AuthContext)
    if(loader){
        return <div>loading....</div>
    }
    if(!user || !user?.email){
       return <Navigate to="/signin"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;