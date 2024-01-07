import { RouteObject } from "react-router-dom";
import Product from "./screens/Product";



export enum ProductsRouterEnum {
    LOGIN = '/products'
}

export const producstsRouter: RouteObject[] = [
    {
        path: ProductsRouterEnum.LOGIN,
        element: <Product/>
    }
];