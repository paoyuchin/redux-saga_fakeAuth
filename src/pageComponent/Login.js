import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { loginRequest, loginCancel } from "../store/action/actions";
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
  FormFeedback
} from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button1 from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

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
      password: "",
      showEmptyInputMessage: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      showEmptyInputMessage: false      
    });
  };
  handleSubmit = e => {
    e.preventDefault();    
    if (this.state.username === "" || this.state.password === "") {
      this.setState(prevState => ({
        showEmptyInputMessage: true
      }));
      return;
    } else {
      this.props.logIn(this.state);
    }
  };
  render() {
    let { from } = this.props.location.state || { from: "/" };
    // let { redirectToReferrer } = this.state;
    // if (redirectToReferrer) return <Redirect to={from} />;
    if (this.props.isAuthenticated) {
      this.props.history.push("/protected");
    }
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
              {this.state.showEmptyInputMessage ? (
                <p className="text-danger">This is a required field</p>
              ) : (
                false
              )}
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">password</Label>
              <Input
                onChange={this.handleChange}
                name="password"
                id="password"
                placeholder="password"
              />
              {this.state.showEmptyInputMessage ? (
                <p className="text-danger">This is a required field</p>
              ) : (
                false
              )}
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
    logIn: credential => {
      dispatch(loginRequest(credential));
    },
    loginCancel: () => {
      dispatch(loginCancel());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
