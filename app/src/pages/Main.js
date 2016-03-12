import React, { Component } from 'react';
import Header from '../components/Header.js';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Header type="main"/>
                This would be the app
            </div>
        );
    }
}


export default Main;