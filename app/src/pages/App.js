import React from 'react';
import { Component } from 'react';
import Header from '../components/Header.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header type="main"/>
                {this.props.children}
            </div>
        );
    }
}