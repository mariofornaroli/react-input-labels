import { ReactNode } from "react";

export interface ReactInputLabelsProps {
    suggestions?: string[];
    className?: string;
    itemClassName?: string;
    values: string[];
    onChange: Function;
    placeholder?: string;
    closeItemCmp?: ReactNode;
    inputClassName?: string;
}