import React, { Component } from "react";
import fire from "./config/fire";

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
    fire.auth().signOut();
    console.log("signed out");
  }

  componentDidMount() {
    const that = this;
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        // change this?
        that.setState(() => {
          uid, email;
        });
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  }

  render() {
    const { email, uid } = this.state;
    console.log(email, uid);

    return (
      <div>
        <h1>HOME</h1>
        {email} and {uid}
        <button onClick={this.logout}>log off</button>
      </div>
    );
  }
}

export default Home;
