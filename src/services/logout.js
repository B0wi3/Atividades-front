export const handleLogout = async () => {
    await axios.post('http://192.168.15.105:8080/auth/logout', {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    localStorage.removeItem("token");
};