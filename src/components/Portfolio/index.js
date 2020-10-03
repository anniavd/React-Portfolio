import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import{ faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//name,image,githubLink,deploy,description,technologies

function Portfolio(props){


  console.log(props)
return(
    <main>
      <h1>Portfolio</h1>
    <CardDeck>
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Img variant="top" src= {require(`../../assets/images/${props.image}`)} alt={props.name}/>
        <Card.Text>
         {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <p>{props.technologies}<a href={props.githubLink} target="_blank"  rel ="noopener noreferrer"style={{fontSize:'40px',color:'orange'}}><FontAwesomeIcon icon={faGithubSquare} /> </a> </p>
        <small className="text-muted">
</small>
      </Card.Footer>
    </Card>
    </CardDeck>
    </main>
)
}

export default Portfolio;