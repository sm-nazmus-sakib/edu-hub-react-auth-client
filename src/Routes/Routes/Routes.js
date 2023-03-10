import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CourseDetail/CheckOut/CheckOut";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://back-end-virid.vercel.app/courses`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://back-end-virid.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://back-end-virid.vercel.app/${params.id}`)
            }

        ]
    }
])