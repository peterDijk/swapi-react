import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import TopBar from './components/TopBar'
import FilmsContainer from './components/FilmsContainer'
import FilmsDetailsContainer from './components/FilmsDetailsContainer'
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
              <Route exact path="/films" component={FilmsContainer} />
              <Route exact path="/films/:id" component={FilmsDetailsContainer}/>
              <Route exact path="/people" component={PeopleContainer} />
              <Route exact path="/" render={() => <Redirect to="/films"/>} />
            </Switch>

          </main>
        </div>
      </Router>
    );
  }
}

export default App;