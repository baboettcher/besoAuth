import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCJ_p6zSYmCVkbdUO2WbbMPX0Yj8BqEK5A",
  authDomain: "beso2019-d2b2d.firebaseapp.com",
  databaseURL: "https://beso2019-d2b2d.firebaseio.com",
  projectId: "beso2019-d2b2d",
  storageBucket: "beso2019-d2b2d.appspot.com",
  messagingSenderId: "995168794140"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth();

export default firebase;
