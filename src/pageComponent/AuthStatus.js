import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { LogOut } from "../store/action/actions";
import "../App.css";
import { Button } from "reactstrap";

class AuthStatus extends Component {
  render() {
    return this.props.isAuthenticated ? (
      <p>
        Welcome!
        <Button
          size="sm"
          color="primary"
          onClick={() => {
            this.props.logout();
            this.props.history.push("/");
          }}
        >
          Sign out
        </Button>
      </p>
    ) : (
      <p>You are not signed in.</p>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(LogOut());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthStatus)
);
