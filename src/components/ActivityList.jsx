import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/api';

const getPastelColor = (index) => {
    const pastelColors = [
      "#f7d1cd", // Rosa
      "#e0f7fa", // Azul claro
      "#dcedc8", // Verde claro
      "#fff9c4", // Amarelo claro
      "#ffccbc", // Laranja claro
      "#f3e5f5", // Lilás claro
      // Adicione mais cores pastel aqui se necessário
    ];
    return pastelColors[index % pastelColors.length]; // Aplique as cores de forma cíclica
  };
  

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
        <div className="activities">
            <h2>Atividades</h2>
            <div className="activity-list">
                {activities.map((activity, index) => (
                <div key={activity.id} className="activity-item" style={{ backgroundColor: getPastelColor(index) }}>
                    <p>({activity.id}) {activity.activityName} {activity.category}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityList;