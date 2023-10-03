import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";

const Routes= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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
        ]
    }
])
export default Routes