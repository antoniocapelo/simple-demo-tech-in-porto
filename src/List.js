import React, { Component } from 'react';
import ListItem from './ListItem';

const inline = 'INLINE'

class List extends Component {
  render() {
      if (!this.props.items.length) {
          return this._renderEmptyList();
      }

    return (
        <div>
        { this.props.title && <h4>
            { this.props.title}
          </h4>
        }
        <ul className="list">
            { this.props.items.map((item) => (
                <ListItem 
                        item={item} 
                        key={item.id} 
                        onRemoveClick={ this.props.onRemoveClick } 
                        mode={ this.props.mode }/>
            ) )}
        </ul>
        </div>
    );
  }

    _renderEmptyList() {
        return <p>sorry, no items...</p>;
    }
}

List.defaultProps = {
    items: [],
}

List.propTypes = {
    items: React.PropTypes.array,
    mode: React.PropTypes.oneOf([inline]),
}

export default List;

