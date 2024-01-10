import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequest";
import { ProductType } from "../../../shared/types/ProductTyp";

const Product = () => {
    const { products, setProducts } = useDataContext()
    const { getProduct } = useRequests()


    useEffect(() => {
        getProduct<ProductType>('http://localhost:3001/product', setProducts)
    }, [])
    console.log(products.map(prod => prod.name))

    return (
        <div>{`PRODUTOS ${products.map(prod => prod.name)}`}`</div>
    )
}

export default Product;