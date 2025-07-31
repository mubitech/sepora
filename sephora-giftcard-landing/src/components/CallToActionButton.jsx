import React from 'react';
import './CallToActionButton.css'; // Assuming you will create a CSS file for styles

const CallToActionButton = ({ link, text }) => {
    return (
        <a href={link} className="cta-button">
            {text}
        </a>
    );
};

export default CallToActionButton;