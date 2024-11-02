import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getActivities = async () => {
    return api.get('/activity/all');
};