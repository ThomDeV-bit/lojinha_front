import { Div, ImageSection, LoginSection, InputContainer, DivInput, Input, Button } from "../styled/loginScreen.styles"
import axios from "axios"


export const LoginScreen = () => {
    return (
        <Div>
            <ImageSection src="./background.png"></ImageSection>
            <LoginSection>
                <InputContainer>
                    <h1>Login</h1>
                    <DivInput>
                        <label>Email</label>
                        <Input></Input>
                    </DivInput>
                    <DivInput>
                        <label>Password</label>
                        <Input></Input>
                    </DivInput>
                    <Button type="submit">Enter</Button>
                </InputContainer>
            </LoginSection>
        </Div>

    )
}

