import React, { useState } from 'react';
import { login } from '../services/api.js';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: ''});

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Tentando realizar login...');
        try {
            const response = await login(credentials);
            alert('Login realizado.');
            window.location.href = '/';
        } catch (error) {
            console.error(error);
            alert('Credenciais inválidas.');
        }
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type='text' onChange={handleChange} name='username' placeholder='username' value={credentials.username} required />
                <input type='text' onChange={handleChange} name='password' placeholder='password' value={credentials.password} required />
                <button type='submit'>Login</button>                
            </form>
        </div>
    );
};

export default LoginPage;