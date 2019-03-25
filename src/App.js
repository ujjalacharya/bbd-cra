import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
