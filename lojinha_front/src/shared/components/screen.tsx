import { ScreenContainer } from "./screen.style"

interface ScreenProps {
    children: React.ReactNode
}

export const Screen = ({ children } : ScreenProps) => {
    return (
        <ScreenContainer>
            {children}
        </ScreenContainer>

    )
}