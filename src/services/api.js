import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getActivities = async () => {
    return api.get('/activity/all');
};

export const login = async(credentials) => {
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
};

export const register = async(registerCredentials) => {
    const response = await api.post('/auth/register', registerCredentials);
    const loginResponse = await login(registerCredentials);
    return loginResponse;
}

export const createActivity = async(activityData) => {
    const token = localStorage.getItem('token');
    return await api.post('/activity/create', activityData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};