import React from 'react';

import { useNews } from '../../model';
import { Article } from '../Article';
import { WriteBar } from '../WriteBar';

import styles from './index.module.css';

export const News: React.FC = () => {
    const { articles, createArticle } = useNews();

    return (
        <div className={styles.news}>
            <WriteBar onGenerate={createArticle} />
            {Boolean(articles.length) && (
                <ul className={styles.articles}>
                    {articles.map(({ id, title, text, status }) => (
                        <li key={id}>
                            <Article
                                id={id}
                                title={title}
                                text={text}
                                status={status}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
