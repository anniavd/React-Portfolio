import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import{ faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

//name,image,githubLink,deploy,description,technologies

function Portfolio(props){

  console.log(props)
return(
    <main>
    <CardDeck>
    <Card>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>anna{props.name}</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    </CardDeck>
    </main>
)
}

export default Portfolio;