import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from'./composants/Header' ; 
import List from './composants/List'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Container">
          <List />
        </div>
      </div>
    )
    


  }
}

export default App;
