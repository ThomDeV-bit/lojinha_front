
import { Spin } from 'antd'
import { useEffect } from 'react';
import { getAuthorizationToken } from '../../../shared/functions/auth';
import { useNavigate } from 'react-router-dom';
import { ProductsRouterEnum } from '../../products/routes';
import { LoginRouterEnum } from '../../login/routes';


const FirstScreen = () => {
    useEffect(() => {
        const navigate = useNavigate()
        const token = getAuthorizationToken()
        console.log(token)
        if (token) {
            navigate(ProductsRouterEnum.LOGIN)
        } else {
            navigate(LoginRouterEnum.LOGIN)
        }
    }, [])
    return <Spin />;
}

export default FirstScreen;