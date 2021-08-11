import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Header from './components/header/header.component';
class App extends React.Component {
  constructor(){
    super();
    this.state={
            currentUser:null
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }
  render(){return (
    <div>
       <Header currentUser={this.state.currentUser}/>
     <Route exact path="/" component={SignInAndSignUpPage}/>

    </div>
  );
}
}

export default App;
