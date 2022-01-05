import React, { Component } from 'react'
import '../css/App.css';
import Nav from './Nav'
import Main from './Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // Selected Region
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
