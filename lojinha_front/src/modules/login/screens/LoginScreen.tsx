import { Button } from "antd"
import { useRequests } from "../../../shared/hooks/useRequest"
import { Div, ImageSection, LoginSection, InputContainer, DivInput, Input } from "../styled/loginScreen.styles"
import { useState } from "react"
import { useGlobalContext } from "../../../shared/hooks/useGlobal"


export const LoginScreen = () => {
    const { accessToken, setAccessToken } = useGlobalContext();
    const { load, getRequest } = useRequests()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        setAccessToken('novo Token')
        await getRequest('http://localhost:3001/singin/singin',
            {
                email: email,
                password: password
            }
        )
    }
    return (
        <Div>
            <ImageSection src="./background.png"></ImageSection>
            <LoginSection>
                <InputContainer>
                    <h1>Login {accessToken}</h1>
                    <DivInput>
                        <label>Email</label>
                        <Input onChange={handleEmail} value={email}></Input>
                    </DivInput>
                    <DivInput>
                        <label>Password</label>
                        <Input onChange={handlePassword} value={password}></Input>
                    </DivInput>
                    <Button loading={load} type="primary" onClick={handleLogin}>Enter</Button>
                </InputContainer>
            </LoginSection>
        </Div>
    )
}

