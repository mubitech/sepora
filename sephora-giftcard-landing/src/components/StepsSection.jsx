import React from 'react';
import './StepsSection.css'; // Assuming you will create a CSS file for specific styles

const StepsSection = () => {
    return (
        <div className="steps-section">
            <h2 className="steps-title">Claim Your $750 Gift Card in 3 Easy Steps</h2>
            <div className="steps-container">
                <div className="step">
                    <div className="step-icon">1</div>
                    <p className="step-description">Sign up for our newsletter.</p>
                </div>
                <div className="step">
                    <div className="step-icon">2</div>
                    <p className="step-description">Follow us on social media.</p>
                </div>
                <div className="step">
                    <div className="step-icon">3</div>
                    <p className="step-description">Share this offer with friends.</p>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;