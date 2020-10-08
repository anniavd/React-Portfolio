import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../assets/images/ann.jpg';
import Container from 'react-bootstrap/Container'

function About() {
    //render infor for About
    return (
        <main>
            <section>
                <h1 className="about" >About me</h1>
                <Container>
                    <Row>
                        <Col >
                            <Image src={img} roundedCircle alt="Annia Valdes" />
                        </Col>

                        <p> My name is Annia Valdes Diaz. I am a graduate in Computer Science Engineering since 2008.
                        I have 4 years of experience worked with software development team.
                        I worked in software development projects at the University of Computer Sciences (UCI ).
                        During this time I assumed the roles like a Principal System Analyst, Project Leader,
                       Unit Test Designer for the software and Software Quality Control.<br></br>
                       <br></br>
                       As a developer I am looking for new challenges. I am friendly, charismatic and I like to research.
                        I like to watch documentaries, to travel and to go out with my family.

                          </p>
                    </Row>
                </Container>
            </section>
        </main>

    );
}

export default About;