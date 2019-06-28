import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import Photography from './Photography';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Menu />
            <Route path="/" exact component={Home} />
            <Route path="/photography" exact component={Photography} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
