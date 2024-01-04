import { RouteObject, createBrowserRouter } from "react-router-dom";
import LoginScreen from ".";
import type { Router as RemixRouter } from '@remix-run/router'


export const loginRouter: RouteObject[] = [
    {
        path: '/signIn',
        element: <LoginScreen></LoginScreen>
    }
];