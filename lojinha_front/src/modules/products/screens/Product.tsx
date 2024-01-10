import { useGlobalContext } from "../../../shared/hooks/useGlobal";

const Product = () => {
    const { user } = useGlobalContext()
    console.log(user?.access_token,'adadadad')
    return (
        <div>{`PRODUTOS ${user?.access_token}`}</div>
    )
}

export default Product;