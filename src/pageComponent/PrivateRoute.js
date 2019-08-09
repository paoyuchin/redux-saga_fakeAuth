import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    const { ProtectedComponent, isAuthenticated } = this.props;
    return (
      <Route
        {...this.props}
        render={props => {
          console.log(100, props)
          return isAuthenticated ? (
            <ProtectedComponent {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname }
              }}
            />
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
