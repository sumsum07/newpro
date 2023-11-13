// StarPage.js
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const StarPage = () => {
    const [starId, setStarId] = useState('');
    

    const handleAddStar = async () => {
        try {
            const response = await fetch(`http://localhost:8080/star/${starId}`, {
                method: 'POST',
                credentials: 'include',
            });

            // Handle the response as needed
            console.log(response);

            // You can redirect to another page or handle the response accordingly
            // For simplicity, let's just log the response and stay on the same page
        } catch (error) {
            console.error('Error adding star:', error);
        }
    };

    return (
        <div>
            <label>
                Star ID:
                <input
                    type="text"
                    value={starId}
                    onChange={(e) => setStarId(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleAddStar}>Add Star</button>
        </div>
    );
};

export default StarPage;
