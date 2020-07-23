import React, {Component} from 'react';

class ItemComponent extends Component {
  render() {
    return(
      <li>
        <span>{this.props.data.symbol}</span>
        &nbsp;
        <span>{this.props.data.title}</span>
      </li>
    );
  }
}

export default ItemComponent;
