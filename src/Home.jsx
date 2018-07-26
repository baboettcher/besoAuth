import React, { Component } from "react";
import firebase from "./config/firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      uid: ""
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
    console.log("signed out");
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;

        const currentUser = firebase.auth().currentUser;

        console.log("CU->", currentUser);
        const { name, email, photoUrl, uid, emailVerified } = currentUser;
        console.log(
          "name, email, photoUrl, uid, emailVerified)--->",
          name,
          email,
          photoUrl,
          uid,
          emailVerified
        );

        //var user = firebase.auth().currentUser;
        // ... how to get this into state?
      } else {
        // User is signed out.
        // ...
      }
    });
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <button onClick={this.logout}>log off</button>
      </div>
    );
  }
}

export default Home;
