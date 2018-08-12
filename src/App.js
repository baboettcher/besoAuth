import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import fire from "./config/firebase";

//import fakeAuth from "./auth/fakeAuth.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("USER", user.data);
        this.setState({ user });
        // localStorage.setItem('user', user.uid)
      } else {
        console.log("NO USER");
        this.setState({ user: null });
        // localStorage.removeItem('user')
      }
    });
  }

  render() {
    return <div> {this.state.user ? <Home /> : <Login />} </div>;
  }
}
export default App;
