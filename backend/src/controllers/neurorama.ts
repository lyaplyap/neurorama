import { Request, Response } from 'express';

import neurorama from '../features/neurorama';
import { IncompleteData } from '../shared/errors';
import { createController } from '../shared/utils';

export const create = createController(
    async (
        request: Request<unknown, { title: string }, { title: string }>,
        response: Response<{ text: string }>
    ) => {
        const { title } = request.body;

        if (!title) {
            throw new IncompleteData('Title not found');
        }

        const text = await neurorama.create(title);

        response.json({ text });
    }
);
