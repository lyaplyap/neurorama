import cors from 'cors';
import express from 'express';
import path from 'path';

import { errorMiddleware } from './middlewares/error';
import neuroramaRoutes from './routes/neurorama';
import { createCORSConfig } from './shared/utils';

export const createApp = () => {
    const app = express();

    // Middlewares (before)
    app.use(express.json());
    app.use(cors(createCORSConfig()));

    // API
    app.use('/api/news', neuroramaRoutes);

    // Middlewares (after)
    app.use(errorMiddleware);

    // Statics
    app.use('/', express.static(path.join(__dirname, '../..', 'frontend', 'dist')));
    app.get('/*', (_, response) => {
        response.sendFile(path.resolve(__dirname, '../..', 'frontend', 'dist', 'index.html'));
    });

    return app;
};
