export type Article = {
    id: string;
    title: string;
    text?: string;
    status: 'pending' | 'fulfilled' | 'rejected';
};
