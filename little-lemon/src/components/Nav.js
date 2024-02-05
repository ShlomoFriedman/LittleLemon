import React from 'react';

const Nav = () => {
    return (
        <header className='app-navbar'>
            <img src="/Little%20Lemon%20Logo.svg" alt="Logo" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </header>
    )
}

export default Nav;