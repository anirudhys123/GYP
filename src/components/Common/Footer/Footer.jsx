import React from 'react';
import './Footer.css';
import logo from '../../../assets/images/logo.jpg';
import appStore from '../../../assets/images/app-store.png';
import playStore from '../../../assets/images/play-store.png';
import visa from '../../../assets/images/visa.png';
import masterCard from '../../../assets/images/master-card.png';
import amex from '../../../assets/images/amex.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Footer Info */}
                <div className="footer-info footer-column">
                    <img src={logo} alt="Logo" width="40%" height="50%" />
                    <p style={{ marginTop: '20px',fontWeight:'bold',fontSize:'20px' }}>Awesome Project Delivering website</p>
                    {/* <p><span className="bi bi-geo-alt-fill"></span> Address: Hyderabad, India</p>
                    <p><span className="bi bi-telephone-fill"></span> Call Us: (+91) - 8179972478</p>
                    <p><span className="bi bi-envelope"></span> Email: <a href="mailto:saianirudh643@gmail.com">saianirudh643@gmail.com</a></p>
                    <p><span className="bi bi-clock"></span> Hours: 10:00 - 18:00, Mon - Sat</p> */}
                </div>
                
                 {/* Contact Information in a Column */}
                 <div className="footer-column">
                    <p>Contact Information</p>
                    <p><span className="bi bi-geo-alt-fill"></span> Address: Hyderabad, India</p>
                    <p><span className="bi bi-telephone-fill"></span> Call Us: (+91) - 85230 47295</p>
                    <p><span className="bi bi-envelope"></span> Email: <a href="mailto:ganesh.kadimi17@gmail.com">ganesh.kadimi17@gmail.com</a></p>
                    <p><span className="bi bi-clock"></span> Hours: 10:00 AM - 6:00 PM, Monday - Saturday</p>
                </div>
                {/* Corporate Links
                <div className="footer-column">
                    <h3>Corporate</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contributors</a></li>
                    </ul>
                </div> */}

               

                {/* Install App Section */}
                <div className="footer-column">
                    <h3>Install App</h3>
                    <p>From App Store or Google Play</p>
                    <div className="app-logo">
                        <img src={appStore} alt="App Store" width="40%" />
                        <img src={playStore} alt="Google Play" width="40%"height="25%"/>
                    </div>
                    <p style={{marginTop:'25px'}}>Secured Payment Gateways</p>
                    <div className="payment-icons">
                        <img src={visa} alt="Visa" width="20%" height = "25%" />
                        <img src={masterCard} alt="Mastercard" width="20%" height="25%" />
                        <img src={amex} alt="Amex" width="20%" height="25%" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
