import React, { Component } from "react";
import "./App.css";
import fire from "./config/fire";
import Home from "./Home";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    // begin auth listener process
    this.authListener();
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

  /*   Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    in Home (at App.js:39)
 */
  render() {
    return (
      <div className="App">
        <h1>BeSO</h1>
        {this.state.user ? <Home /> : <Login />}
      </div>
    );
  }
}

export default App;
