import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../css/images/logo-ahs.png';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                </div>
                <div className="mobile-menu" id="mobile-menu">
                    <i className="fas fa-bars"></i>
                </div>
                <nav className="menu" id="top-nav">
                    <ul className="menu-ul">
                        <li>
                            <Link to="/adopt/pet-adoption">
                                ADOPT
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-1">
                                <li>
                                    <Link to="/adopt/pet-adoption">
                                        Pet Adoption
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/adopt/adoption-process">
                                        Adoption Process
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/service/spray-neuter">
                                SERVICE
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-2">
                                <li>
                                    <Link to="/service/spray-neuter">
                                        Spray and Neuter
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service/dog-training">
                                        Dog Training
                                     </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about-us">
                                ABOUT US
                            </Link>

                        </li>
                        <li>
                            <Link to="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </ header>
        );
    }
}

export default Header;