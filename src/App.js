import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Products/>
      </div>
    );
  }
}

export default App;
