import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
