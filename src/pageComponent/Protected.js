
import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Protected = () => {
  return <p> you are in Protected page</p>;
};

export default Protected;
