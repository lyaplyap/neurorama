export type ApiError = {
    status: number;
    code: string;
    message: string;
    payload?: any;
    requestId?: string;
};
