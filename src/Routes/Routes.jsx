import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home/Home';
import Aboutus from "../Pages/About/Aboutus/Aboutus";
import Services from "../Pages/Services/Services/Services";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Client from "../Pages/Client/Client";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<Aboutus></Aboutus>
            },
            {
                path:'service',
                element:<Services></Services>
            },
            {
                path:'contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'client',
                element:<Client></Client>
            }

        ]
    },
]);
export default router;