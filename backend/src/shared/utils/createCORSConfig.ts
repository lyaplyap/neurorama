import { CorsOptions } from 'cors';

import { isProduction } from './environment';

const PROD_CLIENT_URL = 'https://neurorama.press';
const DEV_CLIENT_URL = '*';

export const createCORSConfig = (): CorsOptions => {
    return {
        origin: isProduction() ? PROD_CLIENT_URL : DEV_CLIENT_URL,
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
    };
};
