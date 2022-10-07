import React from 'react';
import {Navbar} from "../../common";
import {MediciRobot, MediciLogo} from './../../../images';
import './Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Header = () => {
    const navListMain =[
        {href: '#', name: 'О ПРОГРАММЕ'},
        {href: '#', name: 'ВОЗМОЖНОСТИ'},
        {href: '#', name: 'ЭКОСИСТЕМА'},
        {href: '#', name: 'ТАРИФЫ'},
        {href: '#', name: 'ОТЗЫВЫ'},
        {href: '#', name: 'НАШИ КЛИЕНТЫ'},
        {href: '#', name: 'О НАС'},
        {href: '#', name: 'СВЯЗАТЬСЯ С НАМИ'},
    ];
    return (
        <header >
            <Row>
                <Col md={1}></Col>
                <Col md={8} className={'mt-auto mb-5'}>
                    <a href="/" className="header_logo-link">
                        <Image fluid src={MediciLogo} className="header__logo-pic" alt="Medici"></Image>
                    </a>
                </Col>
                <Col md={3}><Image fluid src={MediciRobot} className="header__logo-pic" alt="Medici"></Image></Col>
            </Row>
            <Row>
                <Col>
                    <hr className="hr mt-1"></hr>
                </Col>
            </Row>
            <Navbar items={navListMain}/>
        </header>
    );
};

export default Header;
