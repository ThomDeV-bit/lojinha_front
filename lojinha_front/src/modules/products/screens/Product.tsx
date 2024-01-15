import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequest";
import { ProductType } from "../../../shared/types/ProductTyp";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Buffer } from "buffer";

export function readFile(blob: Blob) {
    const fileReader = new FileReader()
    fileReader.addEventListener('load', (e) => {
        const res = e.target?.result
        fileReader.readAsDataURL(blob)

    })
}
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
        render: (_, { categorie }) => (
            <>
                {categorie.map((categorie) => {
                    let categorieName = categorie.name
                    return (
                        <div key={categorieName}>{categorieName}</div>
                    )
                }
                )}
            </>
        )
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (_, { image }) => (
            <>
                {image.map((image: Blob | any) => {
                    const al = Buffer.from(image.image['data']).toString('base64')
                    return (
                        <div>
                            <img style={{ height: 50, width: 50 }} src={`data:image/png;base64,${al}`} />
                        </div>
                    )
                }

                )}
            </>
        )
    },



];
const Product = () => {
    const { products, setProducts } = useDataContext()
    const { getProduct } = useRequests()


    useEffect(() => {
        getProduct<ProductType>('http://localhost:3001/product', setProducts)
    }, [])

    return (

        <Table columns={columns} dataSource={products} />
    )
}

export default Product;