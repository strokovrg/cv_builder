import React, { Component } from "react"
import { Tab, Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Contacts = () => {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Adress</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Links and Blog</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content >
                            <Tab.Pane eventKey="first">
                                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/About-2x_619996714.png" />
                                <p>Our team is all over the world.
                                    Educating and empowering the SEO community by providing the freshest news and latest best practices via the industry is smartest practitioners.

                                    Launched in 2003, SEJ is unique in its community-based approach to search marketing content. Virtually all of our contributed articles come from real online marketing experts, both independent and in-house. SEJ is owned by Alpha Brand Media.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4F6xf"></img>
                                <h1>Strokov Roman</h1>
                                <br />
                                <h1>Samygin Vladislav</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src="https://static-maps.yandex.ru/1.x/?size=650,250&l=map&pt=37.4815669,55.6702773,pm2gnm&z=15&ll=37.4815669,55.6702773"></img>
                                <p>avenue. Vernadsky, 78, p. 4, Moscow</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src="https://avatars.mds.yandex.net/get-zen_doc/1587860/pub_5e39f6359f55a157f2a5c17a_5e39fd347d0f665e00649c96/scale_1200"></img>
                                <p>vk.com</p>
                                <br />
                                <p>yandex.ru</p>
                                <br />
                                <p>https://t.me/strokovrg</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container >
    )

}


export { Contacts }