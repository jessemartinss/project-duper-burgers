/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.scss';
import Brand from '../../assets/icons/brand-default.svg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="db-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center text-lg-start mb-lg-0 mb-4">
                            <img src={Brand} alt="" />
                            <p>Lorem ipsum dolor sit amet consect adipiscing elit aliquam mauris.</p>
                            <div className="db-footer-social">
                                <a href=""><FaFacebook/></a>
                                <a href=""><FaTwitter/></a>
                                <a href=""><FaInstagram/></a>
                                <a href=""><FaLinkedin/></a>
                                <a href=""><FaYoutube/></a>
                                <a href=""><FaWhatsapp/></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center text-lg-start mb-lg-0 mb-4">
                            <h5>Menu</h5>
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>About</li>
                                <li>Menu</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center text-lg-start mb-lg-0 mb-4">
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li>Terms & Condition</li>
                                <li>Privacy Policy</li>
                                <li>FAQ</li>
                                <li>Newslatter</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-lg-start text-center">Contact</h5>
                            <div className="db-footer-contact">
                                <div className="db-footer-contact-icon">
                                    <a href=""><FaEnvelope/></a>
                                </div>
                                <div className="db-footer-contact-content">
                                    <h4>Email:</h4>
                                    <h6>contact@qrcode.com</h6>
                                </div>
                            </div>
                            <div className="db-footer-contact">
                                <div className="db-footer-contact-icon">
                                    <a href=""><FaPhoneAlt/></a>
                                </div>
                                <div className="db-footer-contact-content">
                                    <h4>Phone:</h4>
                                    <h6>(414) 687 - 5892</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
