
import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Protected = () => {
  return <h3> you are in Protected page</h3>;
};

export default Protected;
