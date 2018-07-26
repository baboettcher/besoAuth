import React, { Component } from "react";
import firebase from "./config/firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState(() => {
      return { [name]: value };
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();
    console.log("handleSubmit firebased!", email, password);

    // DO: check for invalid entry

    this.setState(() => {
      return { email: "", password: "" };
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        console.log("AUTH", auth);
      })
      .catch(err => {
        console.log("errorcito: ", err);
      });
  }

  createAccount() {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        console.log("CREATE ACCOUNT AUTH", auth);
      })
      .catch(err => {
        console.log("errorcito: ", err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Auth page</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <button onClick={this.handleSubmit} type="submit" value="Submit">
            Log-in
          </button>
        </form>

        <button onClick={this.createAccount}>Sign-up</button>
      </React.Fragment>
    );
  }
}
export default Login;
