import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
       <div className="navbar">
        <div className="navbar_in container">
            <div className="navbar_left">
                <h1>Bahtiyor Rahmonaliyev</h1>
            </div>
            <div className="navbar_right">
                <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/study">Study</Link></li>
                    <li><Link to="/job">Job</Link></li>
                </ul>
                </div>
                <div className="btn_resume">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button>Resume</button>
                    </a>
                </div>
                <div className="btn_mode" onClick={toggleMode}>
                    <h1>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</h1>
                </div>
            </div>
        </div>
       </div> 
    )
}

export default Navbar;
