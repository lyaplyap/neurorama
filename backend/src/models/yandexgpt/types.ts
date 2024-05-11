import { ROLES, MODELS } from './constants';

type Role = typeof ROLES[keyof typeof ROLES];

export type Message = {
    role: Role;
    text: string;
};

export type CompletionOptions = {
    stream?: boolean;
    temperature?: number;
    maxTokens?: number;
};

export type RequestBody = {
    modelUri: string;
    completionOptions?: CompletionOptions;
    messages: Message[];
};

type Status =
    | 'ALTERNATIVE_STATUS_UNSPECIFIED'
    | 'ALTERNATIVE_STATUS_PARTIAL'
    | 'ALTERNATIVE_STATUS_TRUNCATED_FINAL'
    | 'ALTERNATIVE_STATUS_FINAL'
    | 'ALTERNATIVE_STATUS_CONTENT_FILTER'

export type ResponseBody = {
    result: {
        alternatives: {
            message: Message;
            status: Status;
        }[];
        usage: {
            inputTextTokens: number;
            completionTokens: number;
            totalTokens: number;
        },
        modelVersion: string;
    }
};

export type Model = typeof MODELS[keyof typeof MODELS];

export type Properties = {
    model?: string;
    instruction?: string;
    context?: Message[];
    options?: CompletionOptions;
};
