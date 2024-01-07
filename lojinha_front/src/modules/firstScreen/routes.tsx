import { RouteObject } from "react-router-dom";
import FirstScreen from "./screens/FirstScreen";






export const firstScreenRouter: RouteObject[] = [
    {
        path: '/',
        element: <FirstScreen />,
        errorElement: <div>Erro</div>

    }
];