import config from '../../config';
import { YandexGPT } from '../../models/yandexgpt';

import { TEMPERATURE, IS_CONTEXTABLE } from './constants';
import { createPrompt } from './utils';

class Neurorama extends YandexGPT {
    constructor() {
        super({
            model: config.neuroramaId,
            options: {
                temperature: TEMPERATURE
            }
        });
    }

    async create(title: string) {
        const prompt = createPrompt(title);
        const text = await super.completion(prompt, IS_CONTEXTABLE);

        return text;
    }
}

const neurorama = new Neurorama();

export default neurorama;
