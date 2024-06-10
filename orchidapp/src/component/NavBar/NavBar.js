// src/NavBar.js
import React from 'react';
import './NavBar.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { Navbar, NavItem, Icon } from 'react-materialize';


function NavBar() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <nav>
            <ul>
                <li className='brand'>
                    Orchids Exhibition
                </li>
                <li>
                    <Nav.Link as={Link} to="/Home" activeClassName='active'>Home</Nav.Link>
                </li>
                <li>
                    <Nav.Link as={Link} to="/" activeClassName='active'>Collection</Nav.Link>
                </li>

                <li>
                    <Nav.Link as={Link} to="/Contact" activeClassName='active'>Contact</Nav.Link>
                </li>
            </ul>
            <div style={{ position: 'relative' }}>
                <a className='switch-mode' href='#' onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid="toggle-theme-btn"
                >
                    Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>

        </nav>
    );
}

export default NavBar;
