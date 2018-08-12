import React, { Component } from "react";
import firebase from "./config/firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      uid: "",
      newUser: false
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>Home Sweet Home</h1>

        <h3>Add React Router here</h3>
        <button onClick={this.logout}>signout</button>
      </div>
    );
  }
}

export default Home;

/* 

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


 */
