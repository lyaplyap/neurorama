import cn from 'classnames';
import React from 'react';

import { ButtonProps } from './types';

import styles from './index.module.css';

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    icon,
    size = 48,
    view = 'action',
    width = 'auto',
    align = 'center',
    ...props
}) => {
    return (
        <button
            style={{ height: size, minWidth: size }}
            className={
                cn(
                    styles.button,
                    styles[`view__${view}`],
                    styles[`width__${width}`],
                    styles[`align__${align}`],
                    className
                )}
            {...props}
        >
            {Boolean(icon) && <span className={styles.icon}>{icon}</span>}
            {Boolean(children) && <span className={styles.text}>{children}</span>}
        </button>
    );
};
