import React, { Component } from 'react';
import  { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <h3>Hello World!</h3>
        </Router>
      </Provider>
    );
  }
}

export default App;
