import React, {Component} from 'react';
import EmojiComponent from './EmojiComponent';

class ListComponent extends Component {
  render() {
    const emojis = [];
    for(let i = 0; i < 10; i++) {
      emojis.push(<EmojiComponent/>)
    }

    return(
    <div>
      <ul>
        {emojis}
      </ul>
    </div>
    );
  }
}

export default ListComponent;
