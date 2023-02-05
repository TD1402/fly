import React, { useState } from 'react';

//import icon
import { SiConsul, SiWolfram } from 'react-icons/si';
// import { BsPhoneVibrate } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';

// import images
import logo from '../../assets/logo.png';

const Navbar = () => {
    //let us remove the navbar in the small width screens
    const [active, setactive] = useState('navBarMenu');
    const showNavBar = () => {
        setactive('navBarMenu showNavBar');
    };

    const removeNavBar = () => {
        setactive('navBarMenu');
    };

    // let us add a background color to the second navbar
    const [noBg, addBg] = useState('navBartwo');
    const addBgColor = () => {
        if (window.screenY > 10) {
            addBg('navBartwo navbar_With_Bg');
        } else {
            addBg('navBarTwo');
        }
    };
    window.addEventListener('scroll', addBgColor);

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>

                <div className="none flex">
                    <li className="flex">
                        <SiWolfram />
                        Sopport
                    </li>
                    <li className="flex">
                        <SiWolfram />
                        Languages
                    </li>
                </div>

                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} className="logo" />
                </div>
                <div className={active}>
                    <div className="menu flex">
                        <li onClick={removeNavBar} className="listItem">
                            Home
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            About
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            Offers
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            Seats
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            Destinations
                        </li>
                    </div>

                    <button onClick={removeNavBar} className="btn flex btnOne">
                        Contact
                    </button>
                </div>
                <button className="btn flex btnTwo">Contact</button>

                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
