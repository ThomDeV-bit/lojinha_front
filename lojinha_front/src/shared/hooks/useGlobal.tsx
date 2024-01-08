import { createContext, useContext, useState } from "react";
import { User } from "../../modules/types/UserType";

interface NotificationsProps {
    message: string;
    type: 'success' | 'info' | 'warning' | 'error',
    description?: string
};

interface GlobalData {
    user?: User;
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

    const setUser = (user: User) => {
        setGlobalData({
            ...globalData,
            user
        })
    }
    return {
        notification: globalData?.notification,
        user: globalData?.user,
        setUser,
        setNotification,

    };
};