export const ROLES = {
    SYSTEM: 'system',
    ASSISTANT: 'assistant',
    USER: 'user'
} as const;

export const MODELS = {
    PRO: 'yandexgpt',
    LITE: 'yandexgpt-lite',
    SUMMARIZATION: 'summarization'
} as const;

export const YANDEXGPT_COMPLETION_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
