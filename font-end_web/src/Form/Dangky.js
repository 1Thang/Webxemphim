import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/user/1'); // Replace '1' with the ID of the user you want to fetch
                const userData = response.data.content; // Assuming the API response contains user data
                setName(userData.name);
                setEmail(userData.email);
                // Set other fields similarly
                setIsLoading(false);
            } catch (error) {
                console.error('Fetch user data error:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
           
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
