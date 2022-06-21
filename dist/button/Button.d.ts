import { FC } from 'react';
export interface ButtonProps {
    children: any;
    color?: string;
    bgColor?: string;
    hoverBgColor?: string;
    hoverColor?: string;
    width?: number;
    height?: number;
    isLoading?: boolean;
    loaderColor?: string;
    onClick?: () => void;
}
declare const Button: FC<ButtonProps>;
export default Button;
