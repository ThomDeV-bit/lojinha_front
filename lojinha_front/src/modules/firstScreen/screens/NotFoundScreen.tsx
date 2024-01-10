import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"
import { LoginRouterEnum } from "../../login/routes"



const PageNotFound = () => {
    const navigate = useNavigate()
    const hadleOnClick = () => {
        navigate(LoginRouterEnum.LOGIN)
    }
    return <Result
        status='404'
        title='404'
        subTitle='Desculpe, a pagina que voce visitou nao existe.'
        extra={<Button type="primary" onClick={hadleOnClick}>Back Home</Button>} />
}

export default PageNotFound