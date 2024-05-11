import { Request, Response, NextFunction } from 'express';

import { ApiError, InternalError } from '../shared/errors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMiddleware = (error: unknown, request: Request, response: Response, next: NextFunction) => {
    console.log(error);

    if (error instanceof ApiError) {
        const { status, code, message } = error.getData();

        return response
            .status(status)
            .json({ code, message });
    }

    const internalErrorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    const internalError = new InternalError(internalErrorMessage);

    const { status, code, message } = internalError.getData();

    return response
        .status(status)
        .json({ code, message });
};
