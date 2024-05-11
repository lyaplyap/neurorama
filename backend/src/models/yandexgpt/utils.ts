import config from '../../config';

import { ROLES, MODELS } from './constants';
import { CompletionOptions, Message, Model } from './types';

const isFundamentalModel = (model?: string): model is Model => {
    return Object.values<string>(MODELS).includes(model);
};

export const createModelUri = (model: string) => {
    if (isFundamentalModel(model)) {
        return `gpt://${config.yandexFolderId}/${model}`;
    }

    return `ds://${config.yandexFolderId}/${model}`;
};

export const createOptions = (initialOptions: CompletionOptions = {}) => {
    const options: CompletionOptions = {
        stream: false,
        temperature: 0.6,
        ...initialOptions
    };

    return options;
};

type Data = {
    instruction?: string;
    context?: Message[];
    prompt: string;
};

export const createMessages = ({ instruction, context, prompt }: Data) => {
    const messages: Message[] = [];

    if (instruction) {
        messages.push({
            text: instruction,
            role: ROLES.ASSISTANT
        });
    }

    if (context) {
        messages.push(...context);
    }

    messages.push({
        text: prompt,
        role: ROLES.USER
    });

    return messages;
};
