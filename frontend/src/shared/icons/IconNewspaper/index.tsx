import React from 'react';

import { DEFAULT_SIZE } from '../constants';
import { IconProps } from '../types';

import { DEFAULT_ALT } from './constants';
import newspaper from './newspaper.png';

export const IconNewspaper: React.FC<IconProps> = ({ size = DEFAULT_SIZE, className, alt = DEFAULT_ALT }) => {
    return (
        <img
            src={newspaper}
            style={{ width: size, height: size }}
            className={className}
            alt={alt}
        />
    );
};
