import React, { Component } from "react";
import firebase from "./config/firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      uid: ""
    };
  }

  render() {
    const { email, uid } = this.state;
    return (
      <div>
        <h1>HOME</h1>
        <div>{email ? email : null}</div>
        <div>{uid ? uid : null}</div>
        <button onClick={this.logout}>log off</button>
      </div>
    );
  }
}

export default Home;
