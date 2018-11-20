import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import TopBar from './components/TopBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <TopBar />
          </header>
          <main>

          </main>
        </div>
      </Router>
    );
  }
}

export default App;