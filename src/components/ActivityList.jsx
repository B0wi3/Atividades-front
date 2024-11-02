import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/api';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await getActivities();
                setActivities(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchActivities();
    }, []);

    return (
        <div className='activities'>
            <h2>Atividades</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        ({activity.id}) {activity.activityName} - {activity.category}
                        <p> - {activity.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;