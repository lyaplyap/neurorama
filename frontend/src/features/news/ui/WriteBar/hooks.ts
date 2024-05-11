import { useState, useCallback, ChangeEventHandler, KeyboardEventHandler } from 'react';

export const useWriteBar = (onGenerate: (value: string) => void) => {
    const [value, setValue] = useState('');
    
    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
        (event) => setValue(event.target.value),
        []
    );
    
    const handleClick = useCallback(
        () => {
            if (!value) {
                return;
            }

            onGenerate(value);
            setValue('');
        },
        [value, onGenerate]
    );

    const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
        (event) => {
            if (event.key === 'Enter' && value) {
                handleClick();
            }
        },
        [value, handleClick]
    );

    return {
        value,
        handleChange,
        handleClick,
        handleKeyDown
    };
};
