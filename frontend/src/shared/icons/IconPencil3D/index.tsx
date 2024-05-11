import React from 'react';

import { DEFAULT_SIZE } from '../constants';
import { IconProps } from '../types';

import { DEFAULT_ALT } from './constants';
import pencil from './pencil.png';

export const IconPencil3D: React.FC<IconProps> = ({ size = DEFAULT_SIZE, className, alt = DEFAULT_ALT }) => {
    return (
        <img
            src={pencil}
            style={{ width: size, height: size }}
            className={className}
            alt={alt}
        />
    );
};
