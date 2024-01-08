import { useGlobalContext } from "../../../shared/hooks/useGlobal";

const Product = () =>{
    const {user} = useGlobalContext()
    console.log(user?.access_token)
    return (
        <div>{`PRODUTOS ${user}`}</div>
    )
}

export default Product;