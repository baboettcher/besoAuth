import React from "react";
import Login from "./Login";
import Home from "./Home";
import firebase from "./config/firebase";

//import fakeAuth from "./auth/fakeAuth.js";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  componentDidMount(){
    this.authListener()
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        this.setState({user})
        // localStorage.setItem('user', user.uid)
      } else {
        this.setState({user: null});
        // localStorage.removeItem('user')

      }
    })
  }

  render() { 
    return (  );
  }
}
 


export default App;