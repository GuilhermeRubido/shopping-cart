import React, { Component } from 'react';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <Provider>
        <Header/>
        <Products/>
        <Cart/>
      </Provider>
    );
  }
}

export default App;
