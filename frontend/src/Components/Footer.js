import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeedbackToast from './FeedbackToast'
import axios from 'axios';
const Footer = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [showFeedbackToast, setShowFeedbackToast] = useState(false);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const response = await axios.get('/visitor-count');
                setVisitorCount(response.data.count);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };

        fetchVisitorCount();
        // Show the FeedbackToast after 5 seconds
        const timeoutId = setTimeout(() => {
            setShowFeedbackToast(true);
        }, 10000);

        // Clear the timeout to prevent the FeedbackToast from showing if the user navigates away before 5 seconds
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
            {showFeedbackToast && <FeedbackToast />}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Connect With Us</h4>
                            <ul className="social-icons">
                                <li><Link to="#"><i className="fab fa-facebook" /></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="row mt-3">
                        <div className="col-md-12 text-center">
                            <p>© 2023 ToolboXpress. All rights reserved. | Visitors: <span id="visitorCount">{visitorCount}</span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer