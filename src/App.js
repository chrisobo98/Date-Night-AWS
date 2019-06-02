import React, { Component, Fragment } from 'react';
import './App.css';
import { Navbar, Nav} from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import Routes from "./Routes";
import { Auth } from "aws-amplify";



class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true    
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);

    this.props.history.push("/login");

  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
  
  return (
    !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Link to="/" className="top-logo-link">Date Night</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/zip">Search</Nav.Link>
                  <Nav.Link href="/settings">Settings</Nav.Link>
                </Nav>
                <Nav>
                  {this.state.isAuthenticated
                    ? <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                    : <Fragment>
                  
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link eventKey={2} href="/Signup">
                    Signup 
                  </Nav.Link>
                  </Fragment>
                  }
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Routes childProps={childProps} />
      </div>
  );
    
}
}
export default withRouter(App);
