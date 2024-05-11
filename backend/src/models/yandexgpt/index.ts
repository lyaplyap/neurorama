import { getCompletion } from './api';
import { ROLES, MODELS } from './constants';
import { CompletionOptions, Message, Properties, RequestBody } from './types';
import { createModelUri, createOptions, createMessages } from './utils';

export class YandexGPT {
    model?: string;
    instruction?: string;
    context: Message[];
    options?: CompletionOptions;
    
    constructor({ model = MODELS.PRO, instruction, context = [], options }: Properties) {
        this.model = model;
        this.instruction = instruction;
        this.context = context;
        this.options = options;
    }

    async completion(prompt: string, isContextable = true) {
        const request: RequestBody = {
            modelUri: createModelUri(this.model),
            completionOptions: createOptions(this.options),
            messages: createMessages({
                instruction: this.instruction,
                context: this.context,
                prompt
            })
        };
        
        const { result } = await getCompletion(request);
        const { text } = result.alternatives[0].message;

        if (isContextable) {
            const userMessage: Message = {
                text: prompt,
                role: ROLES.USER
            };

            const assistantMessage: Message = {
                text,
                role: ROLES.ASSISTANT
            };

            this.context.push(userMessage, assistantMessage);
        }

        return text;
    }
}
