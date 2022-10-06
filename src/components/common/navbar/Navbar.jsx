import React, {useState} from 'react';
import './Navbar.css';
import {forEach} from "react-bootstrap/ElementChildren";

const Navbar = (props) => {
    const [navItems, setNavItems] = useState([
        {id: 1, href: '#', name: 'О ПРОГРАММЕ'},
        {id: 2, href: '#', name: 'ВОЗМОЖНОСТИ'},
        {id: 3, href: '#', name: 'ЭКОСИСТЕМА'},
        {id: 4, href: '#', name: 'ТАРИФЫ'},
        {id: 5, href: '#', name: 'ОТЗЫВЫ'},
        {id: 6, href: '#', name: 'НАШИ КЛИЕНТЫ'},
        {id: 7, href: '#', name: 'О НАС'},
        {id: 8, href: '#', name: 'СВЯЗАТЬСЯ С НАМИ'},
    ]);
    // function set(){
    //     navItems.forEach(function () {
    //         navItems += <li className="nav__item"><a href="{href}" className="nav__link">{name}</a></li>;
    //     });
    // }
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link">О ПРОГРАММЕ</a></li>
                <li className="nav__item"><a href="#" className="nav__link">ВОЗМОЖНОСТИ</a></li>
                <li className="nav__item"><a href="#" className="nav__link">ЭКОСИСТЕМА</a></li>
                <li className="nav__item"><a href="#" className="nav__link">ТАРИФЫ</a></li>
                <li className="nav__item"><a href="#" className="nav__link">ОТЗЫВЫ</a></li>
                <li className="nav__item"><a href="#" className="nav__link">НАШИ КЛИЕНТЫ</a></li>
                <li className="nav__item"><a href="#" className="nav__link">О НАС</a></li>
                <li className="nav__item"><a href="#" className="nav__link">СВЯЗАТЬСЯ С НАМИ</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;