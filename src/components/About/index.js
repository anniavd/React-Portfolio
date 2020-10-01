import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../assets/images/pintura.jpg';


function About() {
    return (
        <section>
            <h1 id="about">About me</h1>
            <Row>
            <Col xs={6} md={4}>
                <Image src={img} roundedCircle  alt="my photo" />
            </Col>
            </Row>
            <p id="textAbout"> My name is Annia Valdes Diaz. I am a graduate in Computer Science Engineering since 2008.
            I have 5 years of experience worked with software development team.
            I worked in software development projects at the University of Computer Sciences (UCI ).
            During this time I assumed the roles like a Principal System Analyst, Project Leader,
            Unit Test Designer for the software and Software Quality Control.My new skills as a developer are: HTML/CSS,
            SQL, NoSQL, MongoDB, Node.js, Express, ApisResful and React.
         </p>
        </section>
    );
}

export default About;