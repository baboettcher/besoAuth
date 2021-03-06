import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Login from "./Login";
import fakeAuth from "./auth/fakeAuth.js";
import PublicPage1 from "./PublicPage1";
import PublicPage2 from "./PublicPage2";
import PublicPage3 from "./PublicPage3";

const Protected1 = () => <h3>Protected1</h3>;
const Protected2 = () => <h3>Protected2</h3>;
const Protected3 = () => <h3>Protected3</h3>;

export default function AppAuth() {
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

// ---- CHANGE BRANCH WITH AUTH FUNCTION ---- //
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
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
    fakeAuth.isAuthenticated === true ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out{" "}
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);
