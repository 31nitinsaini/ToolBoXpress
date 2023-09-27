import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <p>Email: contact@toolboxpress.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Tool Street, DIY City</p>
                    </div>
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
                        <p>© 2023 ToolboXpress. All rights reserved. | Visitors: <span id="visitorCount">1000</span> |
                            Files Converted: <span id="filesConverted">500</span> | Data Size Manipulated: <span id="dataSizeManipulated">10 MB</span></p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer