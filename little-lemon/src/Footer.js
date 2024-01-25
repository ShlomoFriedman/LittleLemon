import React from 'react';
import logo from './Logo icon.svg';

const footer = () => {
    return (
        <footer>
            <nav>
                <img src={logo}></img>
                <ul>
                    <li>Doormat Navigation</li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order online">Order Online</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li><a href="#address">Address</a></li>
                    <li><a href="#phone number">Phone Number</a></li>
                    <li><a href="email">Email</a></li>
                </ul>
                <ul>
                    <il>Social Media</il>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#tiktok">Tiktok</a></li>
                    <li><a href="Instagram">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    )
}
