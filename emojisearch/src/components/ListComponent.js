import React, {Component} from 'react';
import ItemComponent from './ItemComponent';

class ListComponent extends Component {
  render() {
    const items = [];
    this.props.items.forEach(item => {
      items.push(<ItemComponent data={item}/>)
    })

    return(
    <div>
      <ul>
        {items}
      </ul>
    </div>
    );
  }
}

export default ListComponent;
