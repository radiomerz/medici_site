import React, {useState} from 'react';
import {Header, Section, Footer} from './components/common'
import Counter from "./components/Counter";
import Text from "./components/Text";
import Test1 from "./components/Test1";
import './styles/App.css'
import MediciLogo from './images/MediciLogo.svg';
import MediciRobot from './images/MediciRobot.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Desert from './images/desert.png'


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Медичи', body: 'Медичи - это премиальная МИС'},
        {id: 2, title: 'Касперский', body: 'Касперский - это антивирус'},
        {id: 3, title: 'Кек', body: 'Кек - это лол'}
    ]);

    return (
        <div>
            <Section fill container>
                <Header/>
                <Row>
                    <Col md={1}></Col>
                    <Col md={5} className={"mt-5"}>
                        <p className={'bg-block p-5'}>
                            MEDICI - это медицинская экосистема будущего, комплекс улучшений для всех участников
                            системы здравоохранения, упрощающий их жизнь и повышающий эффективность
                            работы.
                            <br/>
                            <br/>
                            Обладая экспертизой и профессиональной командой, мы реализуем концепцию эффективного и
                            качественного отчественного ПО.
                        </p>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={3}>
                        <Button variant="secondary mt-5">Оставить заявку</Button>{' '}
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Section>
            <Section container>

            </Section>
            <Row>
                {/*<Col md={1}></Col>*/}
                <Col md={6}>
                    <p className={'bg-block p-5'}>MEDICI представляет собой цифровую платформу, которая решает множество
                        задач в современном здравоохранении на всех уровнях принятия решений.</p>
                    <p className={'bg-block p-5'}>
                        Платформа MEDICI собирает, передает и хранит о пациентах, врачах и клиниках в Единой
                        информационно-безопасной среде с персонализированными электронными медицинскими картами
                        пациентов, широким спектром функционала и автоматизированными бизнес процессами.
                    </p>
                </Col>
                <Col md={6} style={{justifyContent: 'space-between'}}>
                    <p className={'bg-block p-5'}>Платформа MEDICI модульная, строится на интеграции ряда решений в
                        единую экосистему и включает в себя:</p>
                    <div className="flex-block" style={{flexWrap: 'wrap', justifyContent: 'flex-start', width: '100%'}}>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                        <Image style={{margin: '16px'}} width={120} fluid src={Desert} className="header__logo-pic" alt="Desert"></Image>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={3}>1</Col>
                <Col md={3}>2</Col>
                <Col md={3}>3</Col>
                <Col md={3}>4</Col>
            </Row>
            <Section fill container>
                <Row>
                    <Col md={12}></Col>
                    <Col><h1>ЧТО MEDICI ПРЕДЛАГАЕТ</h1></Col>
                </Row>
            </Section>
            {/*</section>*/}
            {/*<Footer/>*/}
            {/*<Counter/>*/}
            {/*<Text/>*/}
            {/*<h1 style={{textAlign:'center'}}>Список постов</h1>*/}
            {/*<Test1 post={{id: -2, title: 'Заголовок 1', body: 'Описание 1'}}/>*/}
            {/*<Test1 post={{id: -1, title: 'Заголовок 2', body: 'Описание 2'}}/>*/}
            {/*<Test1 post={{id: 0,  title: 'Заголовок 3', body: 'Описание 3'}}/>*/}
            {/*{posts.map(post=>*/}
            {/*<Test1 post = {post} key={post.id}/>*/}
            {/*)}*/}

        </div>

    );
}

export default App;
