
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import {LogOut} from "../store/action/actions";


class AuthStatus extends Component {

  render(){
    return(
        this.props.isAuthenticated ? (
          <p>
            Welcome!
            <button
              onClick={() => {
              this.props.logout();
              this.props.history.push("/");
              }}
            >
              Sign out
        </button>
          </p>
        ) : (
            <p>You are not logged in.</p>
          )
    )
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthStatus));
