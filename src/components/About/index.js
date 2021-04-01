import React from 'react';
import img from '../../assets/images/ann.jpg';
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure';

function About() {
    //render infor for About
    return (
        <main>
            <section>
                <h1 className="about" >About me</h1>
                <Container>
                    <Figure>
                        <Figure.Image
                            width={250}
                            height={250}                           
                            src={img}
                        />
                        <Figure.Caption>
                            <p ClassName="fontStyle" > My name is Annia Valdes Diaz. I am a graduate in Computer Science Engineering since 2008.
                            I have more than 5 years of experience worked with software development team  in full-cycle software life.
                            I worked in software development projects at the University of Computer Sciences (UCI ).
                            During this time I assumed the roles like a Principal System Analyst, Project Leader,
                          Unit Test Designer for the software and Software Quality Control.<br></br>
                                <br></br>
                         As a developer I am looking for new challenges and keep growing with new technologies. I am friendly,charismatic and I like to research.
                        I like to watch documentaries, to travel and to go out with my family.

                          </p>
                        </Figure.Caption>
                    </Figure>
                </Container>
            </section>
        </main>
    );
}

export default About;