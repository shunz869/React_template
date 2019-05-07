import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import './App.css';

import history from './history';
import Header from './components/header';
import Home from './components/home/home';
import CategoryOne from './components/categoryOne/categoryOne';
import CategoryTwo from './components/categoryTwo/categoryTwo';
import FirProducts from './components/categoryTwo/firstProducts';
import SecProducts from './components/categoryTwo/secondProducts';
import Footer from './components/footer';
import lastestItem from './components/home/lastestItem';

class App extends Component {  
  render() {
    return (
      <React.Fragment>
        <Router history={history} >
          <Header/>
          {/*<Route path="/" exact render={(props) => <Home {...props} items={this.state.items} />} /> */}
            <Route path="/" exact component={Home} />
          <div className="container">
              <div>
                {/*<Route path="/one" exact render={(props) => <CategoryOne {...props} items={this.state.items} />}/>*/}
                <Route path="/one" exact component={CategoryOne} />
                <Route path="/two" exact component={CategoryTwo} />
                <Route path="/first" exact component={FirProducts} />
                <Route path="/second" exact component={SecProducts} />
                <Route path="/home/:_id" exact component={lastestItem} />
              </div>
          </div>
        </Router>
        <hr/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
