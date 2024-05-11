import Markdown from 'markdown-to-jsx';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { prepareText } from '../../lib';

import { ArticleProps } from './types';

import styles from './index.module.css';

export const Article: React.FC<ArticleProps> = ({ text, title, status }) => {
    const placeholder = 'Не удалось сгенерировать статью 😶';

    return (
        <section className={styles.article}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <article>
                {status === 'pending' && <Skeleton count={3} />}
                {status === 'fulfilled' && (
                    <Markdown options={{ wrapper: React.Fragment }}>{prepareText(text)}</Markdown>
                )}
                {status === 'rejected' && <Markdown>{placeholder}</Markdown>}
            </article>
        </section>
    );
};
