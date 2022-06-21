import { FC } from 'react';
import './navbar.css';
interface NavbarProps {
    items?: any[];
    activeItemId?: number;
    callback?: any;
    initialAnimation?: boolean;
    direction?: 'row' | 'column';
    iconPosition?: 'left' | 'right';
    color?: string;
    textSize?: number;
    gap?: number;
    iconSize?: number;
    iconColor?: string;
    lineMarginBottom?: number;
    lineColor?: string;
}
declare const Navbar: FC<NavbarProps>;
export default Navbar;
