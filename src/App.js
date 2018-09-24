import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Landing from "./routes/Landing";

class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Nav />
         <Landing />
      </React.Fragment>
    );
  }
}

export default App;
