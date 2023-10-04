import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";

const Routes= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>This page Under Development</div>,
        children:[
            {
                path: '/',
                element: <Home></Home>
,            },
            {
                path: '/about',
                element: <About></About>
,            },
            {
                path: '/career',
                element: <Career></Career>
,            },
            {
                path: '/login',
                element: <Login></Login>
,            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
,            },
            {
                path: '/category/:id',
                element: <div>hello</div>
,            },
        ]
    }
])
export default Routes