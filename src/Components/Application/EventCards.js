import React, { Component } from 'react';

import { Row, Col, Card, CardTitle} from 'react-materialize'


const EventCards = ({eventName, eventUrl, eventDesc,eventImg}) => 
    <Col s={6}>
            <Card header={<CardTitle image={eventImg}/>} title={eventName}>
                <p>
                    <a href={eventUrl}>
                        Details
                    </a>
                </p>
            </Card>
    </Col>

export default EventCards