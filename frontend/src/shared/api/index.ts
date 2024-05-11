import { API_URL } from './constants';
import { ResponseBody } from './types';

export const createText = async (title: string) => {
    const request = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });

    if (!request.ok) {
        const error = await request.json();

        throw error;
    }

    const { text }: ResponseBody = await request.json();

    return text;
};
