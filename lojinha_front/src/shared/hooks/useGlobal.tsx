import { createContext, useContext, useEffect, useState } from "react";
import { getAuthorizationToken, setAuthorizationToken } from "../functions/auth";
import { User } from "../../modules/types/UserType";

interface NotificationsProps {
    message: string;
    type: 'success' | 'info' | 'warning' | 'error',
    description?: string
};

interface UserType {
    access_token: string
}
interface GlobalData {
    user?: UserType;
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

    const setUser = (access_token: string) => {
        setGlobalData({
            ...globalData,
            user : {
                access_token,
            }
        })
    }
    return {
        notification: globalData?.notification,
        setNotification,
        user: globalData.user,
        setUser
    };
};