import React, { Component } from 'react';
import { Link } from 'react-router';

import './Navbar.css';

export default class Navbar extends Component {
    render() {
        // Activate the link in the navbar depending on the actively clicked link
        const { pathname } = window.location;

        return(
            <nav>
                <div className="nav-wrapper teal lighten-1">
                    <div className="pad-navbar-side">
                        <Link to={`/`} className="brand-logo">Room8</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className={pathname === `/login`? `active` : ``}>
                                <Link to={`login`}>Log in</Link>
                            </li>
                            <li className={pathname === `/signup`? `active` : ``}>
                                <Link to={`signup`}>Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
