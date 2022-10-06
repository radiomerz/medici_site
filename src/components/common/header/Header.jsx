import React from 'react';
import MediciLogo from "../../../images/MediciLogo.svg";
import MediciRobot from '../../../images/MediciRobot.svg'
import {Navbar} from "../../common";
import './Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Header = () => {
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
            <Navbar params={{id: 0, names:'1'}}/>
        </header>
    );
};

export default Header;
