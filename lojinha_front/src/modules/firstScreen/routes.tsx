import { RouteObject } from "react-router-dom";
import FirstScreen from "./screens/FirstScreen";
import PageNotFound from "./screens/NotFoundScreen";


export const firstScreenRouter: RouteObject[] = [
    {
        path: '/',
        element: <FirstScreen />,
        errorElement: <PageNotFound />

    }
];