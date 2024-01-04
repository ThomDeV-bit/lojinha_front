import { BackGoundImage, Button, DivInput, Input, InputContainer, LoginSection } from "../styled/loginScreen.styles"

export const LoginScreen = () => {
    return (
        <LoginSection>
            <BackGoundImage src="./background.png"></BackGoundImage>
            <InputContainer>
                <DivInput>
                    <label>Email</label>
                    <Input></Input>
                </DivInput>
                <DivInput>
                    <label>Password</label>
                    <Input></Input>
                </DivInput>
                <Button>SignIn</Button>
            </InputContainer>
        </LoginSection>
    )
}

