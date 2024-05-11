import config from '../../config';
import iam from '../iam';

import { YANDEXGPT_COMPLETION_URL } from './constants';
import { RequestBody, ResponseBody } from './types';

export const getCompletion = async (request: RequestBody) => {
    const token = await iam.getToken();
    const { yandexFolderId } = config;

    const rawResponse = await fetch(YANDEXGPT_COMPLETION_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-folder-id': yandexFolderId
        },
        body: JSON.stringify(request)
    });

    const response: ResponseBody = await rawResponse.json();
    
    if (!rawResponse.ok) {
        throw response;
    }

    return response;
};
