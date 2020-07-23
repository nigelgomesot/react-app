import React, {Component} from 'react';

class SearchComponent extends Component {
  handleTextChange = event => {
    this.props.handleTextChange(event);
  }

  render() {
    return(
      <div>
        <input type="text" id="search" placeholder="Please enter emoji"
        onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

export default SearchComponent;
