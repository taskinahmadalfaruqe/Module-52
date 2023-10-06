import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SineUp/SineUp";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivetRouts from "./PrivetRouts";
import NewsCategory from "../Pages/NewsCategory/NewsCategory";

const Routes= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>This page Under Development</div>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch("/news.json")
            },

            {
                path: '/about',
                element: <About></About>
            },

            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <NewsCategory></NewsCategory>,
                loader: ()=>fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivetRouts><NewsDetails></NewsDetails></PrivetRouts>,
                loader: ()=>fetch('/news.json')
            },
        ]
    }
])
export default Routes