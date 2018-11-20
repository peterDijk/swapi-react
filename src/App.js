import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import TopBar from './components/TopBar'
import FilmsContainer from './components/FilmsContainer'
import PeopleContainer from './components/PeopleContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <TopBar />
          </header>
          <main>
            <Switch>
              <Route path="/films" component={FilmsContainer} />
              <Route path="/people" component={PeopleContainer} />
              <Route exact path="/" render={() => <Redirect to="/films"/>} />
            </Switch>

          </main>
        </div>
      </Router>
    );
  }
}

export default App;