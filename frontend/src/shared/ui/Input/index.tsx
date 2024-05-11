import cn from 'classnames';
import React from 'react';

import { InputProps } from './types';

import styles from './index.module.css';

export const Input: React.FC<InputProps> = ({
    className,
    icon,
    ...props
}) => {
    return (
        <span className={cn(styles.wrapper, className)}>
            <input className={styles.input} {...props} />
            {Boolean(icon) && <span className={styles.icon}>{icon}</span>}
        </span>
    );
};
