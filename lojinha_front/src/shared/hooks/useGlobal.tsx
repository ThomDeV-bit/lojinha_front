import { createContext, useContext, useEffect, useState } from "react";
import { getAuthorizationToken, setAuthorizationToken } from "../functions/auth";

interface NotificationsProps {
    message: string;
    type: 'success' | 'info' | 'warning' | 'error',
    description?: string
};


interface GlobalData {
    access_token?: string;
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



    const setAccessToken = (access_token: string) => {
        setAuthorizationToken(access_token)
        setGlobalData({
            ...globalData,
            access_token
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
        access_token: globalData?.access_token,
        setAccessToken,
        setNotification
    };
};