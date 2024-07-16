import React, { useState } from 'react';
import axios from 'axios';

const Kickout = () => {
    const [username, setUsername] = useState('');

    const handleKickout = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/kickout', { username });
            alert('User kicked out successfully');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Kickout User</h2>
            <form onSubmit={handleKickout}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Kickout</button>
            </form>
        </div>
    );
};

export default Kickout;
