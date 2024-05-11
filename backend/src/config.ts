import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export type Environment = 'development' | 'production';

export type Config = {
    // App Variables
    environment: Environment;
    port: number | string;
    // Yandex Cloud Variables
    yandexOAuthToken: string;
    yandexFolderId: string;
    neuroramaId: string;
};

export const createConfig = () => {
    const config: Config = {
        environment: (process.env.ENVIROMENT  || 'development') as Environment,
        port: process.env.PORT,
        yandexOAuthToken: process.env.YANDEX_OAUTH_TOKEN,
        yandexFolderId: process.env.YANDEX_FOLDER_ID,
        neuroramaId: process.env.NEURORAMA_ID
    };

    return config;
};

export default createConfig();
