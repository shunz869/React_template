import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';

import history from './history';
import Header from './components/header';
import Home from './components/home/home';
import CategoryOne from './components/categoryOne/categoryOne';
import CategoryTwo from './components/categoryTwo/categoryTwo';
import FirProducts from './components/categoryTwo/firstProducts';
import SecProducts from './components/categoryTwo/secondProducts';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Header/>
          <Route path="/" exact component={Home} />
          <div className="container">
            <Route path="/one" exact component={CategoryOne} />
            <Route path="/two" exact component={CategoryTwo} />
            <Route path="/first" exact component={FirProducts} />
            <Route path="/second" exact component={SecProducts} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
