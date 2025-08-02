import type {ComponentProps, ComponentType, FC} from "react";
import type {IUseMergeProps} from "../pagination.types.ts";
import {usePaginationContext, usePaginationItemContext} from "../../context";
import {useMergeProps} from "../../hooks";

type TPropsComponent<P> = P & IUseMergeProps & ComponentProps<'li'>
type TComponent<P> = ComponentType<TPropsComponent<P>>
type WithLoadingHOC = <P extends object>(
    WrappedComponent: TComponent<P>,
    payload?: TParameter
) => ComponentType<TPropsComponent<P>>;

type TParameter = {
    position: "prev" | "next";
}
export const WithItemProps: WithLoadingHOC = <P extends object>(WrappedComponent: TComponent<P>, payload?: TParameter) => {
    const WidthItemPropsComponent: FC<TPropsComponent<P>> = (props) => {
        const {isLast, isFirst, active} = usePaginationContext();
        const {item} = usePaginationItemContext()
        const {position} = payload || {};
        const {
            inactiveProps,
            activeProps,
            disabledProps,
            isActive,
            disabled,
            className,
            style,
            ...rest
        } = props;
        const {resolvedClassName, resolvedStyle} = useMergeProps({
            inactiveProps,
            disabled: position === 'prev' ? isFirst : isLast,
            isActive: active === item,
            disabledProps,
            activeProps,
            style,
            className
        });
        // @ts-ignore
        return <WrappedComponent {...rest} className={resolvedClassName} style={resolvedStyle}/>
    }
    WidthItemPropsComponent.displayName = `WithItemProps(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return WidthItemPropsComponent;
}
