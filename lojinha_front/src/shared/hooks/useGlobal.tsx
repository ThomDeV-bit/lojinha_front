import { createContext, useContext, useState } from "react";

interface NotificationsProps {
    message: string;
    type: 'success' | 'info' | 'warning' | 'error',
    description?: string
};


interface GlobalData {
    accessToken?: string;
    notification?: NotificationsProps

};

interface GlobalContextProps {
    globalData: GlobalData,
    setGlobalData: (globalData: GlobalData) => void
};

interface GlobalProviderProps {
    children: React.ReactNode
};

const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({})

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext)
    const setAccessToken = (accessToken: string) => {
        setGlobalData({
            ...globalData,
            accessToken
        });
    };
    const setNotification = (message: string, type: 'success' | 'info' | 'warning' | 'error', description?: string) => {
        setGlobalData({
            ...globalData,
            notification: {
                message,
                type,
                description
            }
        })
    }
    return {
        notification: globalData?.notification,
        accessToken: globalData?.accessToken,
        setAccessToken,
        setNotification
    };
};