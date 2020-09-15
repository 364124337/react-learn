import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store";

import Home from './pages/home';
import Detail from './pages/detail';

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
