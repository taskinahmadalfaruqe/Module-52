import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRouts = ({children}) => {
    const {user,isLoading}=useContext(AuthContext)
    const location =useLocation();
    console.log(location)
    if(isLoading){
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
        </div>
    }else{
        if(user){
            return children
        }
        return <Navigate state={location.pathname} to="/logIn"></Navigate>
    }
    
}

PrivetRouts.propTypes = {
    children: PropTypes.object,
}

export default PrivetRouts