import React, { Component } from 'react';
import SearchComponent from './components/SearchComponent';
import ListComponent from './components/ListComponent';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main>
          <section id="search">
            <SearchComponent />
          </section>
          <section id="list">
            <ListComponent />
          </section>
      </main>
    );
  }
}

export default App;
