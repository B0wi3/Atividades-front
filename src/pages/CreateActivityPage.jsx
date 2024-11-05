import React, { useState } from 'react';
import { createActivity } from '../services/api';

const CreatePage = () => {
    const [activityData, setActivityData] = useState({ activityName: '', description: '', category: ''});

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