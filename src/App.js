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
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/discussion" element={<Discussion />} />
    </Routes>
  );
}

export default App;
