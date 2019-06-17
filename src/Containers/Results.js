import React from "react";
import "./Results.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";




const Results = ({ event }) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>
            {event.type}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{event.date}</ListGroupItem>
          <ListGroupItem>{event.time}</ListGroupItem>
          <ListGroupItem>{event.venue}</ListGroupItem>
          <ListGroupItem>{event.address}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    )
  };

  export default Results
