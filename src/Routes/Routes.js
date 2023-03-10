import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Premium from "../Components/Premium/Premium";
import Register from "../Components/Register/Register";
import CourseLayout from "../Layouts/Courses/CourseLayout";
import Main from "../Layouts/Main/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/courses",
                element: <CourseLayout />,
                children: [
                    {
                        path: "/courses",
                        loader: () => fetch("https://code-master-server-alt.vercel.app/courses"),
                        element: <Courses></Courses>
                    },
                    {
                        path: "/courses/:id",
                        loader: ({params}) => fetch(`https://code-master-server-alt.vercel.app/courses/${params.id}`),
                        element: <CourseDetails></CourseDetails>
                    },
                ]
            },
            {
                path:"/premium",
                element:<PrivateRoute><Premium></Premium></PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])