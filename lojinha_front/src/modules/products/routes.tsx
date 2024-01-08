import { RouteObject } from "react-router-dom";
import Product from "./screens/Product";



export enum ProductsRouterEnum {
    PRODUCTS = '/products'
}

export const producstsRouter: RouteObject[] = [
    {
        path: ProductsRouterEnum.PRODUCTS,
        element: <Product/>
    }
];