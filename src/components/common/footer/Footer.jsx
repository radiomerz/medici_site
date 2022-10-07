import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {MediciLogo} from './../../../images'
import Button from "react-bootstrap/Button";
const Footer = () => {
    return (
        <div>
            <Row>
                <Col md={8}>
                    <Image fluid src={MediciLogo} className="header__logo-pic" alt="Medici"></Image>
                </Col>
                <Col md={4}><Button>ОСТАВИТЬ ЗАЯВКУ</Button></Col>
            </Row>
            <Row>
                <Col>
                    apply@medicisoft.ru
                    8 (909) 523-88-52
                    г. Новосибирск, б-р Молодежи, д. 40, кв. 203
                </Col>
                <Col>
                    Договор оферты
                    Стоимость тарифов
                    © 2022 Все права защищены
                </Col>
            </Row>
        </div>
    );
};

export default Footer;