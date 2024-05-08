import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Summary from './Summary';
import Discussion from './Discussion';

function App() {
  return (
    <Router>
    <div>
     

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/discussion">
          <Discussion />
        </Route>
        <Route path="/">
          <Summary />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
