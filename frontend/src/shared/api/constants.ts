const DEV_API_URL = 'http://localhost:5001/api';
const PROD_API_URL = '/api';

export const API_URL = import.meta.env.DEV ? DEV_API_URL : PROD_API_URL;
