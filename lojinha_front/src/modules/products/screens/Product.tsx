import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequest";
import { ProductType } from "../../../shared/types/ProductTyp";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';


const columns: ColumnsType<ProductType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Categorie',
        dataIndex: 'categorie',
        key: 'categorie',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
    },


];
const Product = () => {
    const { products, setProducts } = useDataContext()
    const { getProduct } = useRequests()


    useEffect(() => {
        getProduct<ProductType>('http://localhost:3001/product', setProducts)
    }, [])
    console.log(products.map(prod => prod.name))

    return (

        <Table columns={columns} dataSource={products} />
    )
}

export default Product;