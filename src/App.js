import React, {useState} from 'react';
import {Header, Section, Footer, Navbar} from './components/common';
import {
    Desert,
    Invitro,
    ProDoctorov,
    SberHealth,
    Citilab,
    Logo1C,
    SMSint,
    Bitrix24,
    SynLab,
    SibMedCenter,
    RJDMedicine,
    PMOStandard,
    Narciss,
    IZdorov,
    StandardHealth,
    Lastochka
} from './images';
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

function App() {
    const navListSecond =[
        {href: '#', name: 'СИСТЕМЕ ЗДРАВООХРАНЕНИЯ'},
        {href: '#', name: 'МИНЗДРАВУ'},
        {href: '#', name: 'ВРАЧАМ'},
        {href: '#', name: 'ПАЦИЕНТАМ'},
        {href: '#', name: 'РУКОВОДИТЕЛЯМ'},
    ];
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
            </Section>

            <Row>
                <Col md={3}>1</Col>
                <Col md={3}>2</Col>
                <Col md={3}>3</Col>
                <Col md={3}>4</Col>
            </Row>
            <Section fill container>
                <Row>
                    <Col><h1>ЧТО MEDICI ПРЕДЛАГАЕТ</h1></Col>
                </Row>

                <Row>
                    <Col>
                        <hr className="hr mt-1"></hr>
                    </Col>
                </Row>
                <Row><Col><Navbar items = {navListSecond}/></Col></Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>BLOCK</Col>
                            <Col>BLOCK</Col>
                        </Row>
                        <Row>
                            <Col>
                                BLOCK
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                BLOCK
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Section>
            <Section container>
                <Row><Col><h1>ВОЗМОЖНОСТИ С MEDICI</h1></Col></Row>

                <Row>
                    <Col>
                        <Row>
                            <Col md={3}>Текст 1</Col>
                            <Col md={9}>Текст 2</Col>
                        </Row>
                        <Row>
                            <Col md={9}>Текст 3</Col>
                            <Col md={3}>Текст 4</Col>
                        </Row>
                    </Col>
                    <Col>
                        MEDICI улучшает все аспекты работы управления и ведения деятельности.<br/><br/>
                        Работа с пациентами<br/><br/>

                        Электронные медицинские карты, электронные очереди, регистрация, оптимизация времени на осмотр пациента, медицинские осмотры и проведение диагностических мероприятий и анализов.
                    </Col>
                </Row>
                <Row><Col><h1>ГИБКАЯ ИНТЕГРАЦИЯ</h1></Col></Row>
                <Row>
                    <Col>
                        Интеграция с Соцмедикой позволяет поддерживать врачебные решения и осуществлять проверку выполненных назначений.<br/><br/>
                        Работа с сервичасм 1С обеспечивает полноценную работу склада в организации.
                    </Col>
                    <Col>
                        Интеграция с ПроДокторов и СберЗдоровье.<br/><br/>
                        Возможность интегрироваться со многими другими ссервисами, необходимыми именно вам.<br/><br/>
                        Интеграция с фискальными регистраторами и терминалами оплаты.
                    </Col>
                </Row>
                <Row>
                    <Col><Image fluid src={Invitro} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={ProDoctorov} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={SberHealth} className="header__logo-pic" alt="Medici"></Image></Col>
                </Row>
                <Row>
                    <Col><Image fluid src={Citilab} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={Logo1C} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={SMSint} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={Bitrix24} className="header__logo-pic" alt="Medici"></Image></Col>
                </Row>
                <Row><Col><h1>MEDICI - ЭКОСИСТЕМА НА ПЕРСПЕКТИВУ</h1></Col></Row>
                <Row>
                    <Col>
                        Гибкая экосистема позволяет:
                        ⁃ Осуществлять локализацию на иностранные языки
                        ⁃ Расширять и дополнять систему новыми модулями
                        ⁃ Адаптироваться под локальные нормативно-правовые акты
                        ⁃ Интегрировать справочники
                        ⁃ Адаптироваться под стандарты различных систем здравоохранения
                        ⁃ Экспортировать продукт в сопредельные государства
                    </Col>
                    <Col>
                        <Row>
                            <Col>БЛОК 1</Col>
                            <Col>БЛОК 2</Col>
                        </Row>
                        <Row>
                            <Col>БЛОК 3</Col>
                        </Row>
                    </Col>
                </Row>
                <Row><Col><h1>Тарифы</h1></Col></Row>
                <Row>
                    <Col>
                        <Image fluid src={Desert} className="header__logo-pic" alt="Medici"></Image>
                        <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
                    </Col>
                    <Col>
                        <Image fluid src={Desert} className="header__logo-pic" alt="Medici"></Image>
                        <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
                    </Col>
                    <Col>
                        <Image fluid src={Desert} className="header__logo-pic" alt="Medici"></Image>
                        <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className="hr mt-1"></hr>
                    </Col>
                </Row>
            </Section>
            <Section fill container>
                <Row><Col><h1>ЧТО О НАС ГОВОРЯТ?</h1></Col></Row>
                <Row><Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col></Row>
                <Row><Col md={6}>
                    <Row>
                        <Col><Image fluid src={Desert} width={'50px'} className="header__logo-pic" alt="Medici"></Image></Col>
                        <Col> Jonathan Vallem<br/>New york, USA</Col>
                    </Row>
                </Col></Row>
                <Row><Col md={6}></Col></Row>
            </Section>
            <Section container>
                <Row><Col><h1>НАШИ КЛИЕНТЫ</h1></Col></Row>
                <Row>
                    <Col><Image fluid src={SynLab} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={SibMedCenter} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={RJDMedicine} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={PMOStandard} className="header__logo-pic" alt="Medici"></Image></Col>
                </Row>
                <Row>
                    <Col><Image fluid src={Lastochka} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={Narciss} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={IZdorov} className="header__logo-pic" alt="Medici"></Image></Col>
                    <Col><Image fluid src={StandardHealth} className="header__logo-pic" alt="Medici"></Image></Col>
                </Row>
            </Section>
            <Section fill>
                <Footer/>
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
