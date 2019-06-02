import React, { Component } from "react";
import "./Zip.css";
import { Form, Button } from "react-bootstrap";

export default class Zip extends Component {
    render() {
      return (
            <Form className="zipForm">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="email" placeholder="Ex. 34711" />
                <Form.Text className="text-muted">
                Start finding events and thangs near you!
                </Form.Text>
            </Form.Group>

            <Button className="zipButton" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
      );
    }
  }