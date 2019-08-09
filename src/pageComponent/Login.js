import React, { Component } from "react";
import { connect } from "react-redux";
import {
  LoginRequest
} from "../store/action/actions";
// import SignInForm from "./SignInForm";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback
} from "reactstrap";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: "",
      password: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  checkIsValidUser = () => {
    if (this.props.isAuthenticated) {
      this.toggle();
      this.props.history.push("/protected");
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    // let { redirectToReferrer } = this.state;
    // if (redirectToReferrer) return <Redirect to={from} />;
    if (this.props.isAuthenticated) {
      this.props.history.push("/protected");
    }
    return (
      <div>
        <div>
          <Button color="danger" onClick={this.toggle}>
            login
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader>sign in</ModalHeader>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">username</Label>
                <Input
                  onChange={this.handleChange}
                  name="email"
                  id="username"
                  placeholder="username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">password</Label>
                <Input
                  onChange={this.handleChange}
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </FormGroup>
              {this.props.errorMessage ? <p>{this.props.errorMessage.message}</p> : null} 
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>
                  cancel
                </Button>
                <Button color="secondary" onSubmit={this.handleSubmit}>
                  sign in
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoginFailed: state.auth.isLoginFailed,
    errorMessage: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: credential => {
      dispatch(LoginRequest(credential));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
