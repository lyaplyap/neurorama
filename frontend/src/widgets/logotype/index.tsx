import React from 'react';

import styles from './index.module.css';

export const Logotype: React.FC = () => {
    return (
        <h1 className={styles.logotype}>
            <a href='/'>
                <span className={styles.title}>Нейрорама</span>
                <span className={styles.subtitle}>Самые правдивые вымышленные новости</span>
            </a>
        </h1>
    );
};
