import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

function Navbar(): JSX.Element {
    return (
        <Router>
            <nav className="navbar">
                <div>
                    <NavLink exact to="/" className="navbar__item logo" activeClassName="navbar__item--active">
                        Renato G. Nunes
                    </NavLink>
                </div>
                <ul className="navbar__list">
                    <li>
                        <NavLink to="/about" className="navbar__item" activeClassName="navbar__item--active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/work" className="navbar__item" activeClassName="navbar__item--active">
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles" className="navbar__item" activeClassName="navbar__item--active">
                            Articles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navbar__item button" activeClassName="navbar__item--active">
                            Hire
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Router>
    );
}

export default Navbar;
