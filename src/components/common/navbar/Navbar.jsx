import React, {useState} from 'react';
import './Navbar.css';
import {forEach} from "react-bootstrap/ElementChildren";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {props.items.map((item, i) => <li key={item.name + i} className="nav__item"><a href={item.href} className="nav__link">{item.name}</a>
                </li>)}
            </ul>
        </nav>
    );
};

export default Navbar;