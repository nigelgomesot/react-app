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

  handleSearch = event => {
    this.setState({
      emojis: filterEmojis(event.target.value, 5)
    });
  }

  render() {
    return(
      <main>
          <section id="search">
            <SearchComponent handleTextChange={this.handleSearch}/>
          </section>
          <section id="list">
            <ListComponent items={this.state.emojis}/>
          </section>
      </main>
    );
  }
}

export default App;
