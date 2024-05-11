import React from 'react';

import styles from './index.module.css';

export const Disclaimer: React.FC = () => {
    return (
        <span className={styles.disclaimer}>
            Все тексты сгенерированы LLM и не являются реальными новостями
        </span>
    );
};

