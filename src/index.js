import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Todo from './Todo';
import Nav from './Nav';
import Card from './components/Card/Card';
import App from './App';
import SwNameDetail from './SwNamesDetail';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

//import App from './App';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const Continue = () => {
  return (
    <div>
      <h1>Work in progress...</h1>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Todo" component={Todo} />
        <Route path="/Continue" component={Continue} />
        <Route exact path="/StarWars" component={App} />
        <Route path="/StarWars/:id" component={SwNameDetail} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
