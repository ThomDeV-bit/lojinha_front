
import { Spin } from 'antd'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginRouterEnum } from '../../login/routes';
import { useGlobalContext } from '../../../shared/hooks/useGlobal';
import { ProductsRouterEnum } from '../../products/routes';


const FirstScreen = () => {
    const navigate = useNavigate()
    const { user } = useGlobalContext()
    useEffect(() => {
        console.log(user)
        if (!user) {
            navigate(LoginRouterEnum.LOGIN)
        }
        navigate(ProductsRouterEnum.PRODUCTS)

    }, [])
    return (
        <div>
            <Spin></Spin>
        </div>
    );
}

export default FirstScreen;