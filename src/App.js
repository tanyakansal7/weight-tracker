import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';

class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render(){return (
    <div>
     <Route exact path="/" component={SignInAndSignUpPage}/>

    </div>
  );
}
}

export default App;
