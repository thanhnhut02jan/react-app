import React from 'react';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink text="Home" />
            <NavLink text="Profile" />
            <NavLink text="Vault" />
            <NavLink text="Setting" />
            <NavLink text="About" />
        </div>
    );
}

export default NavBar;
