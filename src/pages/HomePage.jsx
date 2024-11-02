import React from 'react';
import ActivityList from '../components/ActivityList';

const HomePage = () => {
    return (
        <div className='home'>
        <h1>Home</h1>
            <ActivityList />
        </div>
    );
};

export default HomePage;