import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import fakeAuth from "./auth/fakeAuth";

export default class Login extends Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />; // THIS MISSING B4
    }

    return (
      // how do we redirect to an entire page here?
      <div>
        <p>You must log in to view the page at{from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
