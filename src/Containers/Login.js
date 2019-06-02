import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel} from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";
import LoaderButton from "../components/LoaderButton";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    this.setState({ isLoading: true });

  try {
      await Auth.signIn(this.state.username, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push("/Zip");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Link to="/login/reset">Forgot password?</Link>
          <LoaderButton className="forgotPassword"
             block
             bsSize="large"
             disabled={!this.validateForm()}
             type="submit"
             isLoading={this.state.isLoading}
             text="Login"
             loadingText="Logging in…"
          >
            Login
          </LoaderButton>
        </form>
      </div>
    );
  }
}
