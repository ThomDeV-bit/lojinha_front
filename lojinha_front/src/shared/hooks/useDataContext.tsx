import { createContext, useContext, useState } from "react";
import { ProductType } from "../types/ProductTyp";


interface DataContext {
    products?: ProductType[]

};

interface DataContextProps {
    dataContext: DataContext,
    setData: (dataContext: DataContext) => void
};

interface GlobalProviderProps {
    children: React.ReactNode
};

const DataContext = createContext({} as DataContextProps);

export const DataProvider = ({ children }: GlobalProviderProps) => {
    const [dataContext, setData] = useState<DataContext>({})

    return (
        <DataContext.Provider value={{ dataContext, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const { dataContext, setData } = useContext(DataContext)

    const setProducts = (products: ProductType[]) => {
        setData({
            ...dataContext,
            products
        })
    }

    return {
        products: dataContext?.products || [],
        setProducts

    };
};