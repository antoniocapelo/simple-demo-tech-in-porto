import React, { Component } from 'react';
import './ListItem.css';

const inline = 'INLINE'

class ListItem extends Component {
  render() {
      const cls = ['list-item'];

      if (this.props.item.entered) {
          cls.push('ready')
      }

      if (this.props.mode === inline ) {
          cls.push('inline')
      }

    return (
      <li className={ cls.join(' ') } onClick={ () => this.props.onRemoveClick(this.props.item.id)}>
        name: { this.props.item.name }
        <br />
        updatedAt: { this.props.item.updatedAt }
       </li>
    );
  }
}

ListItem.propTypes = {
    item: React.PropTypes.object,
    mode: React.PropTypes.oneOf([inline]),
}

export default ListItem;

