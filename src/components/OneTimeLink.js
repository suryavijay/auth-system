import React, { useState } from 'react';
import axios from 'axios';

const OneTimeLink = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [link, setLink] = useState('');

    const handleGenerateLink = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/one-time-link', { emailOrPhone });
            setLink(response.data.link);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Generate One-Time Link</h2>
            <form onSubmit={handleGenerateLink}>
                <input
                    type="text"
                    placeholder="Email or Phone"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                />
                <button type="submit">Generate Link</button>
            </form>
            {link && <p>Link: {link}</p>}
        </div>
    );
};

export default OneTimeLink;
