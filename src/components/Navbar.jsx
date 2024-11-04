import React, { useState } from 'react';

const NavBar = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(!!localStorage.getItem('token'));

    const handleLogout = async () => {
        try {
            await axios.post('http://192.168.15.105:8080/auth/logout', {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
        } catch (error) {
            console.error("Logout request failed: ", error);
        } finally {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            window.location.href = '/';
        }
    };

    return (
        <div className="navbar">
            <a href="/post">Share a new activity!</a>
            {isLoggedIn ? (
                <a href='/' onClick={ handleLogout }>Logout</a>
            ) : (
                <>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </>
            )}
        </div>
    )
}

export default NavBar;