import {createContext, type FC, type ReactNode, useContext} from "react";
import type {TPageItem} from "../components";

type TPaginationItemContext = {
    item: TPageItem;
}
const PaginationItemContext = createContext<TPaginationItemContext | undefined>(undefined);

export const usePaginationItemContext = () => {
    const context = useContext(PaginationItemContext);
    if (!context) {
        // throw new Error('usePaginationItemContext must be used within a PaginationItemRoot');
        return {
            item:0
        };
    }
    return context;
};

type TPropsPaginationRoot = {
    children: ReactNode;
    item: TPageItem;
}
export const PaginationItemRoot: FC<TPropsPaginationRoot> = ({children, ...rest}) => {
    return <PaginationItemContext.Provider value={{
        ...rest
    }}>
        {children}
    </PaginationItemContext.Provider>
}
