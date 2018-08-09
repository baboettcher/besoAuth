import { firebaseAuth } from "./firebaseAuth.js";

const fakeAuth2 = {
  isAuthenticated: false,

  authenticate(cb) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        // this.setState({ user });
      } else {
        this.isAuthenticated = false;
      }
    });

    console.log("+++++", this.isAuthenticated);
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default fakeAuth2;
