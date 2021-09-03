import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Contact from './pages/contact/contact';
import { auth } from './firebase/firebase.utils';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
    this.unsubscribeFromAuth = null;
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
