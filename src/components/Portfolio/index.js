import React from 'react';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Portfolio(props) {

//render all the applications in Portfolio
  return (

    <Row >
      <Col mb={2}>
        <h3>{props.name}</h3>
        <div className="Project">
          <a href={props.githubLink} target="blank">
            <img className="images"
              src={require(`../../assets/images/${props.image}`)} alt={props.name}

            />
          </a>
          <div className="Project-meta">
            <p>{props.technologies}</p>
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithubSquare} /> </a>
          </div>
        </div>
      </Col>
    </Row >

  )
}

export default Portfolio;