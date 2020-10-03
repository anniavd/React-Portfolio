import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


//name,image,githubLink,deploy,description,technologies

function Portfolio(props) {


  console.log(props)
  return (

    <Row md={3}>
      <Col>
        <h3>{props.name}</h3>
        <div className="Project card">
          <a href={props.githubLink} target="blank">
            <img className="images"
              src={require(`../../assets/images/${props.image}`)} alt={props.name}

            />
          </a>
          <div className="Project-meta">
            <h5>{props.technologies}</h5>
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', color: 'black' }}><FontAwesomeIcon icon={faGithubSquare} /> </a>
          </div>
        </div>
      </Col>
    </Row >

  )
}

export default Portfolio;