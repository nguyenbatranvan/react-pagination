import {createContext, type FC, type ReactNode, useContext} from "react";
import {UsePaginationReturnValue} from "../hooks";

type TPaginationContext = UsePaginationReturnValue & {
    isLast: boolean;
    isFirst: boolean;
}
const PaginationContext = createContext<TPaginationContext | undefined>(undefined);

export const usePaginationContext = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error('usePaginationContext must be used within a PaginationRoot');
    }
    return context;
};

type TPropsPaginationRoot = {
    children: ReactNode;
} & TPaginationContext
export const PaginationWrap: FC<TPropsPaginationRoot> = ({children, ...rest}) => {
    return <PaginationContext.Provider value={{
        ...rest
    }}>
        {children}
    </PaginationContext.Provider>
}
