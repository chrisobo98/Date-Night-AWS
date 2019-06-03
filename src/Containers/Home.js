import React, { Component } from "react";
import "./Home.css";
import { Jumbotron, Button, Tab, Row, Col, ListGroup, Card, CardDeck } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
            
            <Jumbotron fluid className="Jumbotron">
            <div className="banner_inner">
                <h1 className="top-h1-banner">Welcome to Date Night</h1>
                <p className="top-p-banner">
                    Don't you just hate asking your signficant other where your going tonight? It takes forever to figure out doesn't it?
                    Well just use Date Night to plan your next saucy noche with yo' lovah
                </p>
                <p>
                    <Button className="headerButton" variant="primary">Signup</Button>
                    <Button action href="/Login" className="headerButton2" variant="primary">Login</Button>
                </p>
                </div>
            </Jumbotron>
        </div>
            <Tab.Container className="linksHome" id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Link 2
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content className="home-link-text">
                    <Tab.Pane eventKey="#link1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque rutrum luctus. Integer sed scelerisque urna. Aliquam sed risus non est fringilla consectetur. Curabitur eros lorem, lacinia ac porta at, mattis id dui. 
                    Aliquam imperdiet elementum lacus nec eleifend. In ultricies arcu sit amet turpis convallis iaculis. In sit amet sapien nec magna pharetra gravida. Morbi aliquet magna lectus, quis tempor ante vulputate vitae. Praesent neque lorem,         </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque rutrum luctus. Integer sed scelerisque urna. Aliquam sed risus non est fringilla consectetur. Curabitur eros lorem, lacinia ac porta at, mattis id dui. 
                    Aliquam imperdiet elementum lacus nec eleifend. In ultricies arcu sit amet turpis convallis iaculis. In sit amet sapien nec magna pharetra gravida. Morbi aliquet magna lectus, quis tempor ante vulputate vitae. Praesent neque lorem, 
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            
              {/* cards */}
              <CardDeck className="cardDeckHome">
                <Card>
                  <Card.Img variant="top" src="src/Details/Images/bar-blur-blurred-801863.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">1.4 miles from your location</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">6 miles from your location</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to
                      show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">10 miles from your location</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
              <footer class="footer">
      Made with <span role='img' aria-label="heart">❤️</span> by Christopher Bermudez
      </footer>
      </div>

      
      
    );
  }
}

