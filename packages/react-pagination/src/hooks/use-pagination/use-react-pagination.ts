import {usePagination, type UsePaginationOptions} from "./use-pagination";
import {useMemo, useState} from "react";

interface BaseParams {
    offset: number;
    limit: number;
}

type TPropsUseCustomPagination<T extends BaseParams> = {
    totalItem: number;
    params: T;
    onPageChange?: (data: Partial<T>, page: number) => void;
} & Omit<Partial<UsePaginationOptions>, "onChange">;


export const useReactPagination = <T extends BaseParams, >(props: TPropsUseCustomPagination<T>) => {
    const {totalItem, params, onPageChange, ...rest} = props;
    const {limit = 10} = params || {};
    const [max, setMax] = useState(0);
    const total = useMemo(() => {
        const _total = (totalItem && limit) ? Math.ceil(totalItem / limit) : 0;
        setMax(_total)
        return _total;
    }, [totalItem, limit]);

    const {last, first, previous, next, range, setPage, active} = usePagination({
        initialPage: 1,
        ...rest,
        total,
        onChange: (page) => {
            handleChangeParams(page);
        }
    });

    const handleChangeParams = (page: number) => {
        // @ts-ignore
        onPageChange?.({
            limit,
            offset: (page - 1) * limit
        }, page);
    }

    const gotoPage = (page: number) => {
        setPage(page);
    }


    return {
        last, first, previous, next, range, active,
        isFirst: active === 1,
        isLast: active === max,
        setPage: gotoPage
    };
}
