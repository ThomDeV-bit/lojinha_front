import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequest";
import { ProductType } from "../../../shared/types/ProductTyp";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Buffer } from "buffer";

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
                {image.map((image) => {
                    let fileReader = new FileReader()
                    const imagem = new Blob([image.image], { type: 'image/webp' })
                    let im = new ArrayBuffer(imagem.size)
                    const res = Buffer.from(im).toString('base64')

                    fileReader.onload = function () {
                        fileReader.result
                        console.log(fileReader.result)

                    }
                    fileReader.readAsArrayBuffer(imagem)
                    return (
                        <div>
                            <img src={`data:image/png;base64,${imagem}`} />
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
    const cate = (products.map(prod => prod.image))

    return (

        <Table columns={columns} dataSource={products} />
    )
}

export default Product;