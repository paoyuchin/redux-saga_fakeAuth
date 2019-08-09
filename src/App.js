import React, { Component } from "react";
import AuthStatus from './pageComponent/AuthStatus';
import PrivateRoute from "./pageComponent/PrivateRoute";
import Login from './pageComponent/Login';
import Public from './pageComponent/Public';
import Protected from './pageComponent/Protected';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";



class AuthExample extends Component {

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };
render(){
  return (
    <Router>
      <div>
        <AuthStatus />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <PrivateRoute
          path="/protected"
          ProtectedComponent={Protected}
          isAuthenticated={this.props.isAuthenticated}
        />
        <Route
          path="/login"
          render={props => <Login {...props} />}
        />
      </div>
    </Router>
  );
}

}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};


export default connect(mapStateToProps)(AuthExample);

