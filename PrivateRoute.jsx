import React, {  useEffect, useState , useContext } from 'react'
import { AppContext } from '../authcontext/AppContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {authdetails} = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(false); // Mark loading as false once the component mounts
    }, []);

    if (loading) {
      // Render a loading indicator while checking authentication state
      return <div>Loading...</div>;
    }
  

if(!authdetails.authState){

   return <Navigate to={"/login"} />
};

  return children
}

export default PrivateRoute