import React, { Component } from "react";
import "./Zip.css";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";




export default class Zip extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      isLoading: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ isLoading: true });

    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => this.setState({username: response.data.name, isLoading: false }))
  }
  

    render() {

      return (
        <div>
            <Form className="zipForm">
            <Form.Group controlId="formBasicZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control id="zipInput" type="zip" placeholder="Ex. 34711" />
                <Form.Text className="text-muted">
                Start finding events and thangs near you!
                </Form.Text>
            </Form.Group>

            <Button onClick={this.handleClick} disabled={this.state.isLoading} className="zipButton" id="zipSearch" variant="primary" type="submit">
                Submit
            </Button>
            </Form>   

      <Card className="cardResults" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{this.state.username}</Card.Title>
          <Card.Text>
            type
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>date</ListGroupItem>
          <ListGroupItem>time</ListGroupItem>
          <ListGroupItem>venue</ListGroupItem>
          <ListGroupItem>address</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

      

          </div>
      );
    }
  }