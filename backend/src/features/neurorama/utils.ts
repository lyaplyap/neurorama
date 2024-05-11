import { PROMPT } from './constants';

export const createPrompt = (text: string) => `${PROMPT}: ${text}`;
