import { Article } from '../model/types';

const STORAGE_KEY = 'news';

export const saveArticles = (articles: Article[]) => localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));

export const getArticles = (): Article[] => {
    const rawData = localStorage.getItem(STORAGE_KEY);

    if (rawData) {
        return JSON.parse(rawData);
    }

    return [];
};

export const prepareText = (text?: string) => {
    if (!text) {
        return '';
    }

    return text.replace(/\n/, '\n\n');
};
