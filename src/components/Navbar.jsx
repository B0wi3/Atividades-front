const NavBar = () => {
    const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
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