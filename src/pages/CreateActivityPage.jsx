import React, { useState, useEffect } from 'react';
import { createActivity } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
    const [activityData, setActivityData] = useState({ activityName: '', description: '', category: ''});
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token');
            if (!token || !(await validateToken(token))) {
                alert('Sessão expirada. Por favor, faça login novamente.');
                window.location.href = '/login';
            }
        };
        
        checkToken();
    }, [navigate]);

    const handleCreateActivity = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        console.log('Enviando dados: ', { activityData });

        try {
            const response = await createActivity(activityData);
            alert('Atividade criada.');
            window.location.href = '/';
        } catch (error) {
            alert('Erro ao tentar criar atividade.')
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setActivityData({
            ...activityData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='activity-form'>
            <h2>Post new activity</h2>
            <form onSubmit={handleCreateActivity}>
                <input type='text' onChange={handleChange} name='activityName' placeholder='Activity name' value={activityData.activityName} required />
                <input type='text' onChange={handleChange} name='description' placeholder='Activity description' value={activityData.description} required />
                <input type='text' onChange={handleChange} name='category' placeholder='Activity category' value={activityData.category} required />
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};

export default CreatePage;