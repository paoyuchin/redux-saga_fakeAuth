import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { LoginRequest, LoginCancel } from "../store/action/actions";
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
import Spinner from "react-bootstrap/Spinner";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button1 from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Loading = () => {
  return (
    <ButtonToolbar>
      <Button1 variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button1>
    </ButtonToolbar>
  );
};

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
    let { from } = this.props.location.state || { from: "/" };
    console.log(22222222, this.props);
    console.log(333333333, "from", from);
    // let { redirectToReferrer } = this.state;
    // if (redirectToReferrer) return <Redirect to={from} />;
    if (this.props.isAuthenticated) {
      this.props.history.push("/protected");
    }
    console.log("login in props", this.props.location.state);
    return (
      <div>
        <p>You must log in to view the page at {from} </p>
        <Button variant="info" size="sm" onClick={this.toggle}>
          Sign in
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader>Sign in</ModalHeader>
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
            {this.props.errorMessage ? (
              <p className="text-danger">
                {this.props.errorMessage.message}
              </p>
            ) : null}
            {this.props.loading.status === "loading" ? <Loading /> : null}
            <ModalFooter>
              <Button
                outline
                color="secondary"
                onClick={() => {
                  this.props.loginCancel();
                  this.toggle();
                }}
              >
                Cancel
              </Button>
              <Button color="primary" onSubmit={this.handleSubmit}>
                Sign in
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("Login state", state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoginFailed: state.auth.isLoginFailed,
    errorMessage: state.auth.error,
    loading: state.auth,
    isLoginCancel: state.auth.isLoginCancel
    // loading: state.auth.status.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: credential => {
      dispatch(LoginRequest(credential));
    },
    loginCancel: () => {
      dispatch(LoginCancel());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
