import { ERRORS } from './constants';
import { ApiError as TApiError } from './types';

export class ApiError extends Error {
    status: number;
    code: string;

    constructor({ status, code, message }: TApiError) {
        super(message);
        
        this.code = code;
        this.status = status;
    }

    getData() {
        return {
            status: this.status,
            code: this.code,
            message: this.message
        };
    }
}

export class InternalError extends ApiError {
    constructor(message: string) {
        super({
            status: 500,
            code: ERRORS.INTERNAL_ERROR,
            message
        });
    }
}

export class NotFound extends ApiError {
    constructor(message: string) {
        super({
            status: 404,
            code: ERRORS.NOT_FOUND,
            message
        });
    }
}

export class ServiceUnavailable extends ApiError {
    constructor(message: string) {
        super({
            status: 503,
            code: ERRORS.SERVICE_UNAVAILABLE,
            message
        });
    }
}

export class AuthenticationError extends ApiError {
    constructor(message: string) {
        super({
            status: 401,
            code: ERRORS.AUTHENTICATION_ERROR,
            message
        });
    }
}

export class AuthorizationError extends ApiError {
    constructor(message: string) {
        super({
            status: 403,
            code: ERRORS.AUTHORIZATION_ERROR,
            message
        });
    }
}

export class AlreadyExists extends ApiError {
    constructor(message: string) {
        super({
            status: 409,
            code: ERRORS.ALREADY_EXISTS,
            message
        });
    }
}

export class IncompleteData extends ApiError {
    constructor(message: string) {
        super({
            status: 422,
            code: ERRORS.INCOMPLETE_DATA,
            message
        });
    }
}

export class BadRequest extends ApiError {
    constructor(message: string) {
        super({
            status: 400,
            code: ERRORS.BAD_REQUEST,
            message
        });
    }
}
