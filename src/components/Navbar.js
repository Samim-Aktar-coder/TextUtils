import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className={`navbar ${props.theme === 'dark' ? 'dark-navbar' : ''}`}>
            <div className="nav__logo">
                <NavLink to=".">Project</NavLink>
            </div>
            <ul className="nav__list">
                <li><NavLink to="." className="nav__link">Home</NavLink></li>
                <li><NavLink to="about" className="nav__link">About</NavLink></li>
                <li><NavLink to="contact" className="nav__link">Contact</NavLink></li>
                <li><NavLink to="blog" className="nav__link">Blog</NavLink></li>
            </ul>

            <div className="darkmode__btn">
                <div className="dark__btn" onClick={props.toggleTheme}>
                    <div className={`circle ${props.theme ==="light" ?'left' :'right'}`}></div>
                </div>
            </div>
        </div>
    );
}
