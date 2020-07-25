import React, {Component} from 'react';

class ItemComponent extends Component {
  render() {
    const codePointHex = this.props.data.symbol.codePointAt(0).toString(16);
    const imgSrc = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return(
      <li>
        <span><img alt="{this.props.data.symbol}" src={imgSrc}/></span>
        &nbsp;
        <span>{this.props.data.title}</span>
      </li>
    );
  }
}

export default ItemComponent;
