import {type FC, type ReactNode} from "react";
import type {TItemMerProps, TPageItem, TPaginationItem, TPaginationRoot} from "./pagination.types.ts";
import {PaginationItemRoot, usePaginationContext, usePaginationItemContext} from "../context";
import {WithItemProps} from "./hoc/with-item-props";

const PaginationPrevious: FC<TPaginationItem> = (props) => {
    const {previous} = usePaginationContext()
    return <li onClick={previous} {...props}/>
}

const PaginationFirst: FC<TPaginationItem> = (props) => {
    const {first} = usePaginationContext();
    return <li onClick={first} {...props}/>
}

const PaginationLast: FC<TPaginationItem> = (props) => {
    const {last} = usePaginationContext();
    return <li onClick={last} {...props}/>
}

const PaginationNext: FC<TPaginationItem> = (props) => {
    const {next} = usePaginationContext()
    return <li onClick={next} {...props}/>
}

const PaginationRoot: FC<TPaginationRoot> = (props) => {
    return <ul {...props}/>
}

type TPropsPaginationContent = {
    children: (item: TPageItem) => ReactNode
} & Omit<TPaginationItem, 'children'>;
const PaginationContent: FC<TPropsPaginationContent> = ({children}) => {
    const {range} = usePaginationContext();
    return <>{range.map((item, index) =>
        <PaginationItemRoot key={item + '_' + index} item={item}>{children(item)}</PaginationItemRoot>)}
    </>
}

type TPropsPaginationItem = TPaginationItem & {
    item?: TPageItem;
} & TItemMerProps;
const PaginationItem: FC<TPropsPaginationItem> = (props) => {
    const {setPage} = usePaginationContext()
    const {item} = usePaginationItemContext()
    if (item === 'dots') {
        return null;
    }
    const handleSetPage = (item: TPageItem) => {
        setPage(item as number)
    }
    return <li onClick={() => handleSetPage(item)} {...props} />
}

const PaginationDot: FC<TPropsPaginationItem> = (props) => {
    const {item} = usePaginationItemContext()
    if (item === 'dots')
        return <li {...props}/>
    return null;
}
export const Pagination = {
    Previous: WithItemProps(PaginationPrevious, {
        position: "prev"
    }),
    First: WithItemProps(PaginationFirst, {
        position: "prev"
    }),
    Next: WithItemProps(PaginationNext, {
        position: "next"
    }),
    Last: WithItemProps(PaginationLast, {
        position: "next"
    }),
    Root: PaginationRoot,
    Item: WithItemProps(PaginationItem),
    Dot: PaginationDot,
    Content: PaginationContent
}
