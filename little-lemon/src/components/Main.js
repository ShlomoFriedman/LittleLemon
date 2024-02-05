import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Booking from './BookingPage.jsx';
import Header from './Header.js';
import Specials from './Specials.jsx';
import Testimonials from './CustomersSay.jsx';
import About from './Chicago.jsx';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<div>
                <Header />
                <Specials />
                <Testimonials />
                <About />
            </div>} />
            <Route path='/booking' element={<Booking />} />
        </Routes>
    )
}

export default Main;
