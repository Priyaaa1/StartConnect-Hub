import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="cookie-consent">
                <button className="close-button" onClick={handleClose}>
                    &times;
                </button>
                <p>At StartConnect Hub, we use cookies to provide you with a better user experience, including personalized content and advertisements.</p>
                <div className="cookie-consent-buttons">
                    <Link to="/privacypolicy" className="learn-more">
                        Learn more
                    </Link>
                    <button onClick={handleAccept}>Accept All</button>
                </div>
            </div>
        )
    );
};

export default CookieConsent;
