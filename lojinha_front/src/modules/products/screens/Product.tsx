import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequest";
import { ProductType } from "../../../shared/types/ProductTyp";
import { Button, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Buffer } from "buffer";
import { Container, GridContainer } from "../styled/productScreen.styles";
import { convertNumber } from "../../../shared/functions/convertNumber";
import { useNavigate } from "react-router-dom";
import { ProductsRouterEnum } from "../routes";


const columns: ColumnsType<ProductType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
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
                        <Tag color="green">{categorieName}</Tag>
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
                    console.log(image)
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
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (_, { price }) => <a>{convertNumber(price)}</a>
    },



];
export const Product = () => {
    const { products, setProducts } = useDataContext()
    const { getProduct } = useRequests()
    const navigate = useNavigate()

    useEffect(() => {
        getProduct<ProductType>('http://localhost:3001/product', setProducts)
    }, [])

    const handleOnClickInsert = () => {
        navigate(ProductsRouterEnum.PRODUCTS_INSERT)
    }

    return (
        <Container>
            <div>
                <Button style={{ width: 400, marginTop: 10 }} onClick={handleOnClickInsert}>Adicionar Produto</Button>
            </div>
            <GridContainer>
                <Table columns={columns} dataSource={products} />
            </GridContainer>
        </Container>
    )
}

