import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import Home from "./Home";
import Photography from "./Photography";
import Decor from "./Decor";
import FoodCatering from "./FoodCatering";
import Cakes from "./Cakes";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <Route path="/" exact component={Home} />
            <Route path="/photography" exact component={Photography} />
            <Route path="/decor" exact component={Decor} />
            <Route path="/about" exact component={About} />
            <Route path="/foodandcatering" exact component={FoodCatering} />
            <Route path="/customizedcakes" exact component={Cakes} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
