import { nanoid } from 'nanoid';
import { useState, useCallback } from 'react';

import * as api from '../../../shared/api';
import * as storage from '../lib';

import { Article } from './types';

export const useNews = () => {
    const [articles, setArticles] = useState<Article[]>(storage.getArticles());

    const createArticle = useCallback(
        async (title: string) => {
            const article: Article = {
                id: nanoid(),
                title,
                status: 'pending'
            };

            setArticles([article, ...articles]);

            try {
                const text = await api.createText(title);
            
                article.text = text;
                article.status = 'fulfilled';
            } catch {
                article.status = 'rejected';
            }

            setArticles([article, ...articles]);
            storage.saveArticles([article, ...articles]);
        },
        [articles]
    );

    return { articles, createArticle };
};
