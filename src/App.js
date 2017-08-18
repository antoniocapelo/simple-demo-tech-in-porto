import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import buildItem from './buildItem';
import oldschool from './oldschool';

const items = [
    buildItem(),
    buildItem(),
    buildItem(),
    buildItem(),
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items,
        };
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;
