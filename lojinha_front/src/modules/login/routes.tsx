import { RouteObject } from "react-router-dom";
import LoginScreen from ".";

export enum LoginRouterEnum {
    LOGIN = '/login'
}


export const loginRouter: RouteObject[] = [
    {
        path: LoginRouterEnum.LOGIN,
        element: <LoginScreen></LoginScreen>
    }
];