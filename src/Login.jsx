import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import fakeAuth from "./auth/fakeAuth";
import fakeAuth2 from "./auth/firebaseAuth2";
//import firebaseAuth from "./auth/firebaseAuth";

export default class Login extends Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    // firebase / mongo /fake
    // NEXT --->> HERE
    fakeAuth2.authenticate(() => {
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
