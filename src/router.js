import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginForm} from "./components/containers/LoginForm";
import {MoviesPage} from "./components/containers/MoviesPage";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {LoginPage, RegisterPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index:true,element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'movieinfo', element:<MovieInfo/>
            }
        ]
    },
    {
        path:"login", element:<LoginPage/>
    },
    {
        path:"register", element:<RegisterPage/>
    }
    ])

export {router}