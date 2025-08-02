import type {ComponentProps, CSSProperties} from "react";

export type TPaginationItem = ComponentProps<'li'>
export type TPaginationRoot = ComponentProps<"ul">;
export type TPageItem = number | "dots";

export interface IUseMergeProps {
    isActive?: boolean;
    activeProps?: ComponentProps<'li'>;
    inactiveProps?: ComponentProps<'li'>;
    className?: string;
    disabledProps?: ComponentProps<'li'>;
    disabled?: boolean;
    style?: CSSProperties | undefined;
}

export type TItemMerProps = Pick<IUseMergeProps, "inactiveProps" | "activeProps" | "disabledProps">
