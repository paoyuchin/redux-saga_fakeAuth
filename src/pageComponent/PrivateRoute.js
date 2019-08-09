import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";


class PrivateRoute extends Component {
  render() {
    const { ProtectedComponent, isAuthenticated } = this.props;
    return (
      <Route
        {...this.props}
        render={props => {
          return isAuthenticated ? (
            <ProtectedComponent {...this.props} />
          ) : (
            <div>
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location.pathname }
                }}
              />
            </div>
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
// export default PrivateRoute;
