import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Login from "./Login";

// --- AUTH MODULE ---//
import fakeAuth from "./auth/fakeAuth.js";
import fakeAuth2 from "./auth/firebaseAuth2.js";
import { firebaseAuth } from "./auth/firebaseAuth.js";

import PublicPage1 from "./PublicPage1";
import PublicPage2 from "./PublicPage2";
import PublicPage3 from "./PublicPage3";

const Protected1 = () => <h3>Protected1</h3>;
const Protected2 = () => <h3>Protected2</h3>;
const Protected3 = () => <h3>Protected3</h3>;

class AppAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  render() {
    console.log("TIME FOR STATE");
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public1">Public Page 1</Link>
            </li>
            <li>
              <Link to="/public2">Public Page 2</Link>
            </li>
            <li>
              <Link to="/public3">Public Page 3</Link>
            </li>
            <li>
              <Link to="/protected1">Protected Page1</Link>
            </li>
            <li>
              <Link to="/protected2">Protected Page2</Link>
            </li>
            <li>
              <Link to="/protected3">Protected Page3</Link>
            </li>
          </ul>

          <Route path="/login" component={Login} />

          <Route path="/public1" component={PublicPage1} />
          <Route path="/public2" component={PublicPage2} />
          <Route path="/public3" component={PublicPage3} />

          <PrivateRoute path="/protected1" component={Protected1} />
          <PrivateRoute path="/protected2" component={Protected2} />
          <PrivateRoute path="/protected3" component={Protected3} />
        </div>
      </Router>
    );
  }
}
export default AppAuth;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth2.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const AuthButton = withRouter(
  ({ history }) =>
    // <<auth>>.isAuthenticated version here --- firebase/mongodb/fake
    fakeAuth2.isAuthenticated === true ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            // <<auth>>.signout version here --- firebase/mongodb/fake
            fakeAuth2.signout(() => history.push("/"));
          }}
        >
          Sign out{" "}
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

// -------- Firebase version ------- //

/*   firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      // this.setState({ user }); setState / Redux
      return true;
    } else {
      return false;
    }
  });
 */

/* export default function AppAuth() {

  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public1">Public Page 1</Link>
          </li>
          <li>
            <Link to="/public2">Public Page 2</Link>
          </li>
          <li>
            <Link to="/public3">Public Page 3</Link>
          </li>
          <li>
            <Link to="/protected1">Protected Page1</Link>
          </li>
          <li>
            <Link to="/protected2">Protected Page2</Link>
          </li>
          <li>
            <Link to="/protected3">Protected Page3</Link>
          </li>
        </ul>

        <Route path="/login" component={Login} />

        <Route path="/public1" component={PublicPage1} />
        <Route path="/public2" component={PublicPage2} />
        <Route path="/public3" component={PublicPage3} />

        <PrivateRoute path="/protected1" component={Protected1} />
        <PrivateRoute path="/protected2" component={Protected2} />
        <PrivateRoute path="/protected3" component={Protected3} />
      </div>
    </Router>
  );
}
 */
