import React, { Component } from "react";
import "./App.css";
import fire from "./config/fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuth: {}
    };
  }

  // this function is called whenever the authentication state changes
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // localStorage.setItem("user", user.uid);
        this.setState({ user });
      } else {
        // localStorage.removeItem("user");
        this.setState({
          user: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>BeSO</h1>
      </div>
    );
  }
}

export default App;
