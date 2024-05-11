import { Request, Response, NextFunction } from 'express';

type Controller = (request: Request, response: Response, next: NextFunction) => Promise<void>;

export const createController = (controller: Controller) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        try {
            await controller(request, response, next);
        } catch (error) {
            next(error);
        }
    };
};
