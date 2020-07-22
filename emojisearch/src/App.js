import React, { Component } from 'react';
import SearchComponent from './components/SearchComponent';
import ListComponent from './components/ListComponent';
import filterEmojis from './filterEmojis.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      emojis: filterEmojis('', 20)
    };
  }

  render() {
    return(
      <main>
          <section id="search">
            <SearchComponent />
          </section>
          <section id="list">
            <ListComponent items={this.state.emojis}/>
          </section>
      </main>
    );
  }
}

export default App;
