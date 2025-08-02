import {type HTMLAttributes} from "react";
import {functionalUpdate} from "./utils/utils";
import {IUseMergeProps} from "../components";

const STATIC_EMPTY_OBJECT = {}
const STATIC_ACTIVE_OBJECT = {className: 'active'}
const STATIC_DISABLED_PROPS = {'aria-disabled': true}



export const useMergeProps = (props: IUseMergeProps):any => {
    const {isActive, activeProps, className, inactiveProps, style, disabled, disabledProps} = props;
    const resolvedDisabledProps: HTMLAttributes<HTMLAnchorElement> = disabled ? (functionalUpdate(disabledProps as any, {}) ?? STATIC_DISABLED_PROPS)
        : STATIC_EMPTY_OBJECT;
    const resolvedActiveProps: HTMLAttributes<HTMLAnchorElement> = isActive
        ? (functionalUpdate(activeProps as any, {}) ?? STATIC_ACTIVE_OBJECT)
        : STATIC_EMPTY_OBJECT;

    const resolvedInactiveProps: HTMLAttributes<HTMLAnchorElement> =
        isActive
            ? STATIC_EMPTY_OBJECT
            : (functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT)
    const resolvedClassName = [
        className,
        resolvedInactiveProps.className,
        resolvedActiveProps.className,
        resolvedDisabledProps.className
    ]
        .filter(Boolean)
        .join(' ');
    const resolvedStyle = (style ||
        resolvedActiveProps.style ||
        resolvedInactiveProps.style) && {
        ...style,
        ...resolvedActiveProps.style,
        ...resolvedDisabledProps.style,
        ...resolvedInactiveProps.style,
    }

    return {
        resolvedClassName,
        resolvedStyle
    }
}
