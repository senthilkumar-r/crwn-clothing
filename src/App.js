import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
const Hats = () => <div>Hats</div>;
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
