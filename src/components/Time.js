import React, { useState } from 'react';
import axios from 'axios';

const Time = () => {
    const [token, setToken] = useState('');
    const [time, setTime] = useState('');

    const handleGetTime = async () => {
        try {
            const response = await axios.get('http://localhost:5000/time', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTime(response.data.time);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Get Time</h2>
            <input
                type="text"
                placeholder="Token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <button onClick={handleGetTime}>Get Time</button>
            {time && <p>Time: {time}</p>}
        </div>
    );
};

export default Time;
