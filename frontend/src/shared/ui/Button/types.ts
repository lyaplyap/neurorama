import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    size?: number;
    view?: 'action' | 'clear' | 'default';
    width?: 'auto' | 'max';
    align?: 'left' | 'center' | 'right';
};
