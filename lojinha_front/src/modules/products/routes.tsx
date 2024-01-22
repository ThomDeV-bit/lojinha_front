import { RouteObject } from "react-router-dom";
import { ProductImage } from "./screens/InsertProductScreen";
import { Product } from "./screens/Product";



export enum ProductsRouterEnum {
    PRODUCTS = '/products',
    PRODUCTS_INSERT = '/products/create'
}

export const producstsRouter: RouteObject[] = [
    {
        path: ProductsRouterEnum.PRODUCTS,
        element: <Product/>
    },
    {
        path: ProductsRouterEnum.PRODUCTS_INSERT,
        element: <ProductImage/>
    }
];