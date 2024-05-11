import React from 'react';

import { IconPencil } from '../../../../shared/icons';
import { Button, Input } from '../../../../shared/ui';

import { useWriteBar } from './hooks';
import { WriteBarProps } from './types';

import styles from './index.module.css';

export const WriteBar: React.FC<WriteBarProps> = ({ onGenerate }) => {
    const { value, handleChange, handleClick, handleKeyDown } = useWriteBar(onGenerate);

    return (
        <div className={styles.bar} onKeyDown={handleKeyDown}>
            <Input
                value={value}
                onChange={handleChange}
                placeholder="Введите заголовок статьи..."
                autoFocus={true}
            />
            <Button
                view="default"
                icon={<IconPencil />}
                onClick={handleClick}
                aria-label="Сгенерировать новость"
                title="Сгенерировать новость"
            />
        </div>
    );
};
