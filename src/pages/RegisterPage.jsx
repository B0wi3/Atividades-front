import React, { useState } from 'react';
import { register } from '../services/api.js';

const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: ''});

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Tentando register...');
        console.log(registerData);
        try {
            const response = await register(registerData);
            console.log('Token armazenado: ', response.token);
            alert('Usuário cadastrado e logado.');
            window.location.href='/';
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='form'>
            <h2>Sign up</h2>
            <form onSubmit={handleRegister}>
                <input type='text' onChange={handleChange} name='username' placeholder='username' value={registerData.username} required />
                <input type='text' onChange={handleChange} name='email' placeholder='email' value={registerData.email} required />
                <input type='text' onChange={handleChange} name='password' placeholder='password' value={registerData.password} required />
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default RegisterPage;