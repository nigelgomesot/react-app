import React, {Component} from 'react';

class ItemComponent extends Component {
  render() {
    return(
      <li>
        {this.props.data}
      </li>
    );
  }
}

export default ItemComponent;
