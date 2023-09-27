import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';

class App extends Component {
  render() {
    return (
      <Provider>
        <Header/>
        <Products/>
      </Provider>
    );
  }
}

export default App;
