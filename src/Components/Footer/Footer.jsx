import React from 'react';

//import icon social

import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';

//import image logo ==>

import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} className="logo" />
                    </div>
                    <p>Your mind should be stronger than your feeling, fly!</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className="icon" />
                        <AiOutlineTwitter className="icon" />
                        <AiFillYoutube className="icon" />
                        <FaPinterestP className="icon" />
                    </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitel">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Export</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">CheckIn</a>
                    </li>
                    <li>
                        <a href="">Manage your booking</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitel">Qick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Route Map</a>
                    </li>
                    <li>
                        <a href="">Out communities</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitel">Qick Guide</span>
                    <li>
                        <a href="">Chauffuer</a>
                    </li>
                    <li>
                        <a href="">Our partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transporttation</a>
                    </li>
                    <li>
                        <a href="">Programme Rules</a>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Footer;
