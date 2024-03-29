import { Button } from "antd"
import { useRequests } from "../../../shared/hooks/useRequest"
import { Div, ImageSection, LoginSection, InputContainer, DivInput, Input } from "../styled/loginScreen.styles"
import { useState } from "react"




export const LoginScreen = () => {
    const { load, loginRequest } = useRequests()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        const user = await loginRequest('http://localhost:3001/singin/singin',
            {
                email: email,
                password: password
            }
        )
        console.log(user)
    }
    return (
        <Div>
            <ImageSection src="./background.png"></ImageSection>
            <LoginSection>
                <InputContainer>
                    <h1>Login</h1>
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

