import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_in container">
                <div className="footer_top">
                    <h1>Bahtiyor Rahmonaliyev</h1>
                    <h2>Middle Frontend Developer</h2>
                    <h3>Follow me on my social media</h3>
                </div>
                <div className="footer_bottom">
                    <div className="footer_links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/study">Study</Link></li>
                            <li><Link to="/job">Job</Link></li>
                        </ul>
                    </div>
                    <div className="social_media">
                        <div className="social_media_item">
                            <img src="src/Images/Instagram_logo_2016.svg.webp" alt="Instagram" />
                            <h1><a href="https://www.instagram.com/b.rakhmonaliyev/">@b.rakhmonaliyev</a></h1>
                        </div>
                        <div className="social_media_item">
                            <img src="src/Images/Telegram_logo.svg.webp" alt="Telegram" />
                            <h1><a href="https://t.me/+X0uaNcK7Ba85OTBi">@bahtiyorrahmonaliyev</a></h1>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom_info">
                    <p>&copy; 2024 Bahtiyor Rahmonaliyev. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
