
import { Spin } from 'antd'
import { useEffect } from 'react';
import { getAuthorizationToken, unsetAuthorizationToken } from '../../../shared/functions/auth';
import { useNavigate } from 'react-router-dom';
import { ProductsRouterEnum } from '../../products/routes';
import { LoginRouterEnum } from '../../login/routes';
import { connectionAPIGet } from '../../../shared/functions/connectionAPI';


const FirstScreen = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const verifyToken = async () => {
            const token = getAuthorizationToken()
            console.log(token)
            if (token) {
                await connectionAPIGet('http://localhost:3001/users/search')
                navigate(ProductsRouterEnum.PRODUCTS)
                
            } else {
                unsetAuthorizationToken();
                navigate(LoginRouterEnum.LOGIN)
            }
        }
        verifyToken();
    }, [])
    return (
        <div>
            <Spin></Spin>
        </div>
    );
}

export default FirstScreen;