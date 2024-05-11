import { createApp } from './app';
import config from './config';

const start = async () => {
    const { port } = config;
    const app = createApp();

    try {
        app.listen(port, () => console.log(`[server]: App is running at http://localhost:${port}`));
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(`[server]: ${error.message}`);
        }

        process.exit(1);
    }
};
  
start();
