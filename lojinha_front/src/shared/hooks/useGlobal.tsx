import { Children, createContext, useState } from "react";

interface GlobalData {
    acessToken?: string;

}

interface GlobalContextProps {
    globalData: GlobalData,
    setGlobalData: (globalData: GlobalData) => void
}

interface GlobalProviderProps {
    children: React.ReactNode
}

const GlobalContext = createContext({} as GlobalContextProps)

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({})

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    )
}