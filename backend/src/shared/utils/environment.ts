import config from '../../config';

export const isProduction = () => config.environment === 'production';

export const isDevelopment = () => config.environment === 'development';
