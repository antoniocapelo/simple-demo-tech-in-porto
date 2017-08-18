import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import buildItem from './buildItem';
import oldschool from './oldschool';

const inline = 'INLINE'

const items = [
    buildItem(),
    buildItem(),
    buildItem(),
    buildItem(),
];

const List = ({ items, mode, onRemoveClick }) => {
    if (!items.length) {
        return <p>no results...</p>;
    }

    return (
        <div>
            <ul className="list">
            { 
                items.map((item) => (
                    <ListItem 
                        item={item} 
                        key={item.id} 
                        onRemoveClick={ onRemoveClick } 
                        mode={ mode }/>
                ))
            }
           </ul>
        </div>
    );
}

const ListItem = ({ item, onRemoveClick, mode }) => {
    const cls = ['list-item'];

    if (item.entered) {
        cls.push('ready')
    }

    if (mode === inline ) {
        cls.push('inline')
    }

    return (
        <li className={ cls.join(' ') }>
        name: { item.name }
        <br />
        updatedAt: { item.updatedAt }
        <button  onClick={ onRemoveClick.bind(null, item.id)}>
            remove
        </button>
        </li>
    );
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items,
        };
    }

  componentDidMount() {
      window.setInterval(() => {
          this.state.items.forEach((item) => {
              item.updatedAt = Number(new Date());
              item.entered = faker.random.boolean();
          })
          this.setState({items: this.state.items });
      }, 1000);
  }
  
    _removeItem(id) {
        const ix = this.state.items.findIndex((el) => el.id === id);

        const newItems = [
            ...this.state.items.slice(0, ix),
            ...this.state.items.slice(ix+1),
        ];

        this.setState({ items: newItems });
    }

  render() {
    return null;
    // return (
      // <div className="App">
        // <List 
            // items={ this.state.items } title={'Guest List:'}
            // onRemoveClick={ (id) => this._removeItem(id) }
            // />
      // </div>
    // );
  }
}

export default App;

