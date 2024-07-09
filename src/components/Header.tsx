import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Calorie Tracker</h1>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/add-meal">Add New Meal</Link>
            </nav>
        </header>
    );
};

export default Header;
